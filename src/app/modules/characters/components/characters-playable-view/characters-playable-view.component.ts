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
import { TranslateModule } from "@ngx-translate/core";
import { RouterLink } from "@angular/router";
import { CharactersPlayableViewTableService } from "../../services/characters-playable-view-table.service";
import { IPlayableCharacter } from "../../interfaces/table.interface";
import { CharactersApiService } from "../../api/characters.api.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ICharacterViewFormResponse } from "../../interfaces/api.interfaces";
import { ViewTableComponent } from "../../../../shared/components/table/view-table/view-table.component";
import { LanguageService } from "../../../../core/services/language/language.service";
import { SharedView } from "../../../../core/classes/shared-view/shared-view";

@Component({
  selector: 'clt-characters-playable-view',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CheckboxFieldComponent, DatetimeFieldComponent, DropdownFieldComponent, ImageFieldComponent, ScrollClassDirective, TextFieldComponent, DefaultBtnComponent, TranslateModule, RouterLink, ViewTableComponent],
  templateUrl: './characters-playable-view.component.html',
  styleUrl: './characters-playable-view.component.scss'
})
export class CharactersPlayableViewComponent extends SharedView implements OnInit {
  public characters: IPlayableCharacter[] = [];

  constructor(
    private charactersApiService: CharactersApiService,
    private charactersPlayableViewTableService: CharactersPlayableViewTableService,
    protected override destroyRef: DestroyRef,
    protected override languageService: LanguageService,
  ) {
    super(destroyRef, languageService);
  }

  ngOnInit(): void {
    this.initLanguage();
    this.initMetadata(() => this.charactersPlayableViewTableService.getHeader());
    this.getCharacters();
  }

  private getCharacters(): void {
    this.charactersApiService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: ICharacterViewFormResponse): void => {
        this.characters = response.character.map((character: IPlayableCharacter) => this.charactersPlayableViewTableService.convertTableData(character));
      });
  }

  public delete(id: string): void {
    this.charactersApiService
      .delete(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        this.getCharacters();
      });
  }
}
