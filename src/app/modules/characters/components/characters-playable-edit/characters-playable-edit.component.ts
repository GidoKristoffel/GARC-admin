import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollClassDirective } from '../../../../shared/directives/scroll-class/scroll-class.directive';
import { DefaultBtnComponent } from '../../../../shared/components/button/default-btn/default-btn.component';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CheckboxFieldComponent } from '../../../../shared/components/fields/checkbox-field/checkbox-field.component';
import { DatetimeFieldComponent } from '../../../../shared/components/fields/datetime-field/datetime-field.component';
import { DropdownFieldComponent } from '../../../../shared/components/fields/dropdown-field/dropdown-field.component';
import { ImageFieldComponent } from '../../../../shared/components/fields/image-field/image-field.component';
import { TextFieldComponent } from '../../../../shared/components/fields/text-field/text-field.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharactersApiService } from '../../api/characters.api.service';
import { ICharacterDetailFormResponse } from '../../interfaces/api.interfaces';
import { IPlayableCharacter } from '../../interfaces/table.interface';
import {
  ICharacterApiForm,
  ICharacterFormBuilder,
} from '../../interfaces/form.interface';
import { CharactersPlayableFormService } from '../../services/characters-playable-form/characters-playable-form.service';
import { SharedEdit } from '../../../../core/classes/shared-edit/shared-edit';
import { LanguageService } from '../../../../core/services/language/language.service';
import {
  CharactersPlayableOptionsService
} from "../../services/characters-playable-options/characters-playable-options.service";
import { ICharactersPlayableOptions } from "../../interfaces/options.interfaces";

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
  ],
  templateUrl: './characters-playable-edit.component.html',
  styleUrl: './characters-playable-edit.component.scss',
})
export class CharactersPlayableEditComponent extends SharedEdit<FormGroup<ICharacterFormBuilder>> implements OnInit {
  public options!: ICharactersPlayableOptions;

  constructor(
    private router: Router,
    private charactersApiService: CharactersApiService,
    private charactersPlayableFormService: CharactersPlayableFormService,
    private charactersPlayableOptionsService: CharactersPlayableOptionsService,
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
  }

  protected initForm(): void {
    this.form = this.charactersPlayableFormService.getForm();
    if (this.id) {
      this.getCharacterById(this.id);
    }
  }

  private initMetadata(): void {
    this.metadata = this.charactersPlayableFormService.getMetadata();
  }

  private getCharacterById(id: string): void {
    this.charactersApiService
      .getById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: ICharacterDetailFormResponse): void => {
        const character: IPlayableCharacter = response.character;
        this.form.patchValue(
          this.charactersPlayableFormService.convertToForm(character),
        );
        this.initOptions();
        this.loaded = true;
      });
  }

  private initOptions(): void {
    this.options = this.charactersPlayableOptionsService.getOptions();
  }

  public save(): void {
    if (this.form) {
      this.charactersPlayableFormService.convertToSend(this.form);
      const submissionForm: ICharacterApiForm = this.charactersPlayableFormService.convertToSend(this.form);

      if (this.id) {
        this.charactersApiService
          .update(this.id, submissionForm)
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe((): void => {
            this.router.navigate([this.detailsLink], {relativeTo: this.route}).then();
          });
      }
    }
  }
}
