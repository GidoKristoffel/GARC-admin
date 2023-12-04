import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { CheckboxFieldComponent } from "../../../../shared/components/fields/checkbox-field/checkbox-field.component";
import { DatetimeFieldComponent } from "../../../../shared/components/fields/datetime-field/datetime-field.component";
import { DropdownFieldComponent } from "../../../../shared/components/fields/dropdown-field/dropdown-field.component";
import { ImageFieldComponent } from "../../../../shared/components/fields/image-field/image-field.component";
import { ScrollClassDirective } from "../../../../shared/directives/scroll-class/scroll-class.directive";
import { TextFieldComponent } from "../../../../shared/components/fields/text-field/text-field.component";
import { DefaultBtnComponent } from "../../../../shared/components/button/default-btn/default-btn.component";
import { LangChangeEvent, TranslateModule, TranslateService } from "@ngx-translate/core";
import { EPage } from "../../../../core/enums/page.enum";
import { RouterLink } from "@angular/router";
import { CharactersPlayableViewTableService } from "../../services/characters-playable-view-table.service";
import { IHeader, IPlayableCharacter } from "../../interfaces/table.interface";
import { CharactersApiService } from "../../api/characters.api.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ICharacterViewFormResponse } from "../../interfaces/api.interfaces";
import { EHeaderType } from "../../../../core/enums/table.enum";
import { ViewTableComponent } from "../../../../shared/components/table/view-table/view-table.component";

@Component({
  selector: 'clt-characters-playable-view',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CheckboxFieldComponent, DatetimeFieldComponent, DropdownFieldComponent, ImageFieldComponent, ScrollClassDirective, TextFieldComponent, DefaultBtnComponent, TranslateModule, RouterLink, ViewTableComponent],
  templateUrl: './characters-playable-view.component.html',
  styleUrl: './characters-playable-view.component.scss'
})
export class CharactersPlayableViewComponent implements OnInit {
  public readonly charactersCreateLink: string = '../' + EPage.Create;
  public headers: IHeader[] = [];
  public characters: IPlayableCharacter[] = [];
  public currentLang: string = '';

  constructor(
    private charactersPlayableViewTableService: CharactersPlayableViewTableService,
    private charactersApiService: CharactersApiService, private destroyRef: DestroyRef,
    private translateService: TranslateService

  ) {}

  ngOnInit(): void {
    this.initHeaderData();
    this.currentLang = this.translateService.currentLang;
    this.translateService.onLangChange.subscribe((event: LangChangeEvent): void => {
      this.currentLang = event.lang;
    });
  }

  private initHeaderData(): void {
    this.headers = this.charactersPlayableViewTableService.getHeader();
    this.charactersApiService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: ICharacterViewFormResponse): void => {
        this.characters = response.character;
        console.log(this.characters);
      });
  }

  public isString(propertyValue: any): boolean {
    return typeof propertyValue === 'string';
  }
}
