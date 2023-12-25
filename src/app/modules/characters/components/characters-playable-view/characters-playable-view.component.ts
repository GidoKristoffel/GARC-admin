import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxFieldComponent } from '../../../../shared/components/fields/checkbox-field/checkbox-field.component';
import { DatetimeFieldComponent } from '../../../../shared/components/fields/datetime-field/datetime-field.component';
import { DropdownFieldComponent } from '../../../../shared/components/fields/dropdown-field/dropdown-field.component';
import { ImageFieldComponent } from '../../../../shared/components/fields/image-field/image-field.component';
import { ScrollClassDirective } from '../../../../shared/directives/scroll-class/scroll-class.directive';
import { TextFieldComponent } from '../../../../shared/components/fields/text-field/text-field.component';
import { DefaultBtnComponent } from '../../../../shared/components/button/default-btn/default-btn.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { CharactersPlayableViewTableService } from '../../services/characters-playable-view-table/characters-playable-view-table.service';
import { IPlayableCharacter } from '../../interfaces/table.interface';
import { CharactersApiService } from '../../api/characters.api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ICharacterViewFormResponse } from '../../interfaces/api.interfaces';
import { ViewTableComponent } from '../../../../shared/components/table/view-table/view-table.component';
import { LanguageService } from '../../../../core/services/language/language.service';
import { SharedView } from '../../../../core/classes/shared-view/shared-view';
import {
  CharactersPlayableMetadataService
} from "../../services/characters-playable-metadata/characters-playable-metadata.service";
import {
  TableViewFacadeComponent
} from "../../../../shared/components/facade/table-view-facade/table-view-facade.component";

@Component({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CheckboxFieldComponent,
    DatetimeFieldComponent,
    DropdownFieldComponent,
    ImageFieldComponent,
    ScrollClassDirective,
    TextFieldComponent,
    DefaultBtnComponent,
    TranslateModule,
    RouterLink,
    ViewTableComponent,
    TableViewFacadeComponent,
  ],
  selector: 'clt-characters-playable-view',
  standalone: true,
  styleUrl: './characters-playable-view.component.scss',
  templateUrl: './characters-playable-view.component.html',
})
export class CharactersPlayableViewComponent extends SharedView implements OnInit {
  public tableData: IPlayableCharacter[] = [];

  constructor(
    private charactersPlayableViewTableService: CharactersPlayableViewTableService,
    private charactersPlayableMetadataService: CharactersPlayableMetadataService,
    protected override destroyRef: DestroyRef,
    protected override languageService: LanguageService,
  ) {
    super(destroyRef, languageService);
  }

  ngOnInit(): void {
    this.initLanguage();
    this.initMetadata(this.charactersPlayableMetadataService.getView());
    this.initTableData();
  }

  private initTableData(): void {
    this.charactersPlayableViewTableService.getCharacters((characters: IPlayableCharacter[]): void => {
      this.tableData = characters;
    });
  }

  public delete(id: string): void {
    this.charactersPlayableViewTableService.deleteCharacter(id, () => this.initTableData());
  }
}
