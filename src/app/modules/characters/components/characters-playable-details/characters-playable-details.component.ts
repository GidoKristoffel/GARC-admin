import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollClassDirective } from '../../../../shared/directives/scroll-class/scroll-class.directive';
import { DefaultBtnComponent } from '../../../../shared/components/button/default-btn/default-btn.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TextFieldViewComponent } from '../../../../shared/components/view/text-field-view/text-field-view.component';
import { IPlayableCharacter } from '../../interfaces/table.interface';
import { CharactersApiService } from '../../api/characters.api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ICharacterDetailFormResponse } from '../../interfaces/api.interfaces';
import { ELanguage } from '../../../../core/enums/language.enum';
import { FormatPipeModule } from 'ngx-date-fns';
import { SharedDetails } from '../../../../core/classes/shared-details/shared-details';
import { LanguageService } from '../../../../core/services/language/language.service';
import { CharactersPlayableMetadataService } from '../../services/characters-playable-metadata/characters-playable-metadata.service';
import {
    TableDetailsFacadeComponent
} from "../../../../shared/components/facade/table-details-facade/table-details-facade.component";

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
        TableDetailsFacadeComponent,
    ],
  templateUrl: './characters-playable-details.component.html',
  styleUrl: './characters-playable-details.component.scss',
})
export class CharactersPlayableDetailsComponent
  extends SharedDetails
  implements OnInit
{
  public character!: IPlayableCharacter;

  constructor(
    private charactersApiService: CharactersApiService,
    private charactersPlayableMetadataService: CharactersPlayableMetadataService,
    protected override route: ActivatedRoute,
    protected override destroyRef: DestroyRef,
    protected override languageService: LanguageService,
  ) {
    super(route, destroyRef, languageService);
  }

  ngOnInit(): void {
    this.initLanguage();
    this.initRoute();
    this.initMetadata(this.charactersPlayableMetadataService.getDetails());
  }

  protected initTableData(id: string): void {
    this.charactersApiService
      .getById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: ICharacterDetailFormResponse): void => {
        this.character = response.character;
        this.character.birthday = new Date(this.character.birthday);
      });
  }
}
