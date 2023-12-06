import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollClassDirective } from "../../../../shared/directives/scroll-class/scroll-class.directive";
import { DefaultBtnComponent } from "../../../../shared/components/button/default-btn/default-btn.component";
import { LangChangeEvent, TranslateModule, TranslateService } from "@ngx-translate/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { EPage } from "../../../../core/enums/page.enum";

@Component({
  selector: 'clt-characters-playable-edit',
  standalone: true,
  imports: [CommonModule, ScrollClassDirective, DefaultBtnComponent, TranslateModule, RouterLink],
  templateUrl: './characters-playable-edit.component.html',
  styleUrl: './characters-playable-edit.component.scss'
})
export class CharactersPlayableEditComponent implements OnInit {
  public charactersDetailsLink: string = '../../' + EPage.Details;
  public currentLang: string = '';
  public id: string | null = '';

  constructor(
    private translateService: TranslateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initLanguage();
    this.initRoute();
  }

  public initLanguage(): void {
    this.currentLang = this.translateService.currentLang;
    this.translateService.onLangChange.subscribe((event: LangChangeEvent): void => {
      this.currentLang = event.lang;
    });
  }

  public initRoute(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (typeof this.id === 'string') {
      this.charactersDetailsLink += EPage.ParamId.replace(':id', this.id);
      // this.getCharacterById(this.id);
    }
  }
}
