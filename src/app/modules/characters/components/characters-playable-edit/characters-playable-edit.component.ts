import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollClassDirective } from '../../../../shared/directives/scroll-class/scroll-class.directive';
import { DefaultBtnComponent } from '../../../../shared/components/button/default-btn/default-btn.component';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CheckboxFieldComponent } from '../../../../shared/components/fields/checkbox-field/checkbox-field.component';
import { DatetimeFieldComponent } from '../../../../shared/components/fields/datetime-field/datetime-field.component';
import { DropdownFieldComponent } from '../../../../shared/components/fields/dropdown-field/dropdown-field.component';
import { ImageFieldComponent } from '../../../../shared/components/fields/image-field/image-field.component';
import { TextFieldComponent } from '../../../../shared/components/fields/text-field/text-field.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharactersPlayableFormService } from '../../services/characters-playable-form/characters-playable-form.service';
import { SharedEdit } from '../../../../core/classes/shared-edit/shared-edit';
import { LanguageService } from '../../../../core/services/language/language.service';
import { CharactersPlayableOptionsService } from '../../services/characters-playable-options/characters-playable-options.service';
import { CharactersPlayableService } from '../../services/characters-playable/characters-playable.service';
import { CharactersPlayableMetadataService } from '../../services/characters-playable-metadata/characters-playable-metadata.service';
import { IPlayableCharacter } from '../../interfaces/table.interface';
import { ICharacterFormBuilder } from '../../interfaces/form.interface';
import { ICharactersPlayableOptions } from '../../interfaces/options.interfaces';
import {
    TableEditFacadeComponent
} from "../../../../shared/components/facade/table-edit-facade/table-edit-facade.component";

@Component({
  selector: 'clt-characters-playable-edit',
  standalone: true,
    imports: [
        CommonModule,
        ScrollClassDirective,
        DefaultBtnComponent,
        TranslateModule,
        RouterLink,
        CheckboxFieldComponent,
        DatetimeFieldComponent,
        DropdownFieldComponent,
        ImageFieldComponent,
        TextFieldComponent,
        FormsModule,
        ReactiveFormsModule,
        TableEditFacadeComponent,
    ],
  templateUrl: './characters-playable-edit.component.html',
  styleUrl: './characters-playable-edit.component.scss',
})
export class CharactersPlayableEditComponent
  extends SharedEdit<FormGroup<ICharacterFormBuilder>>
  implements OnInit
{
  public options!: ICharactersPlayableOptions;

  constructor(
    private charactersPlayableFormService: CharactersPlayableFormService,
    private charactersPlayableOptionsService: CharactersPlayableOptionsService,
    private charactersPlayableMetadataService: CharactersPlayableMetadataService,
    private charactersPlayableService: CharactersPlayableService,
    protected override route: ActivatedRoute,
    protected override destroyRef: DestroyRef,
    protected override languageService: LanguageService,
  ) {
    super(route, destroyRef, languageService);
  }

  ngOnInit(): void {
    this.initLanguage();
    this.initRoute();
    this.initForm();
    this.initMetadata(this.charactersPlayableMetadataService.getEdit());
  }

  protected initForm(): void {
    this.form = this.charactersPlayableFormService.getForm();
    if (this.id) {
      this.getCharacterById(this.id);
    }
  }

  protected save(): void {
    if (this.form && this.id) {
      this.charactersPlayableService.updateCharacter(
        this.id,
        this.form,
        this.detailsLink,
        this.route,
      );
    }
  }

  private getCharacterById(id: string): void {
    this.charactersPlayableService.getCharacterById(
      id,
      (character: IPlayableCharacter): void => {
        this.form.patchValue(
          this.charactersPlayableFormService.convertToForm(character),
        );
        this.initOptions();
        this.loaded = true;
      },
    );
  }

  private initOptions(): void {
    this.options = this.charactersPlayableOptionsService.getOptions();
  }
}
