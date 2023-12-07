import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollClassDirective } from '../../../../shared/directives/scroll-class/scroll-class.directive';
import { DefaultBtnComponent } from '../../../../shared/components/button/default-btn/default-btn.component';
import { EPage } from '../../../../core/enums/page.enum';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  LangChangeEvent,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TextFieldViewComponent } from '../../../../shared/components/view/text-field-view/text-field-view.component';
import { IPlayableCharacter } from '../../interfaces/table.interface';
import { CharactersApiService } from '../../api/characters.api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ICharacterDetailFormResponse } from '../../interfaces/api.interfaces';
import { ELanguage } from '../../../../core/enums/language.enum';
import { FormatPipeModule } from 'ngx-date-fns';

@Component({
  selector: 'clt-characters-playable-details',
  standalone: true,
  imports: [
    CommonModule,
    ScrollClassDirective,
    DefaultBtnComponent,
    RouterLink,
    TranslateModule,
    TextFieldViewComponent,
    FormatPipeModule,
  ],
  templateUrl: './characters-playable-details.component.html',
  styleUrl: './characters-playable-details.component.scss',
})
export class CharactersPlayableDetailsComponent implements OnInit {
  public readonly charactersViewLink: string = '../../' + EPage.View;
  public readonly translateKey: string = 'page.characters.playable.create.';
  public charactersEditLink: string = '../../' + EPage.Edit;
  public id: string | null = '';
  public character!: IPlayableCharacter;
  public currentLang: ELanguage = ELanguage.English;
  public language: typeof ELanguage = ELanguage;

  constructor(
    private route: ActivatedRoute,
    private charactersApiService: CharactersApiService,
    private destroyRef: DestroyRef,
    private translateService: TranslateService,
  ) {}

  ngOnInit(): void {
    this.initLanguage();
    this.initRoute();
  }

  private initLanguage(): void {
    this.currentLang = this.translateService.currentLang as ELanguage;
    this.translateService.onLangChange.subscribe(
      (event: LangChangeEvent): void => {
        this.currentLang = event.lang as ELanguage;
      },
    );
  }

  private initRoute(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (typeof this.id === 'string') {
      this.charactersEditLink += EPage.ParamId.replace(':id', this.id);
      this.getCharacterById(this.id);
    }
  }

  private getCharacterById(id: string): void {
    this.charactersApiService
      .getById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: ICharacterDetailFormResponse): void => {
        this.character = response.character;
        this.character.birthday = new Date(this.character.birthday);
      });
  }
}
