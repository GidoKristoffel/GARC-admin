import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultBtnComponent } from '../../../../shared/components/button/default-btn/default-btn.component';
import { DropdownFieldComponent } from '../../../../shared/components/fields/dropdown-field/dropdown-field.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ScrollClassDirective } from '../../../../shared/directives/scroll-class/scroll-class.directive';
import { TextFieldComponent } from '../../../../shared/components/fields/text-field/text-field.component';
import { TranslateModule } from '@ngx-translate/core';
import { CheckboxFieldComponent } from '../../../../shared/components/fields/checkbox-field/checkbox-field.component';
import { DatetimeFieldComponent } from '../../../../shared/components/fields/datetime-field/datetime-field.component';
import { ImageFieldComponent } from '../../../../shared/components/fields/image-field/image-field.component';
import { FormCacheService } from '../../../../core/services/form-cache/form-cache.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  ICharacter,
  ICharacterFormBuilder,
} from '../../interfaces/form.interface';
import { SharedCreate } from '../../../../core/classes/shared-create/shared-create';
import { ICharactersPlayableOptions } from '../../interfaces/options.interfaces';
import { CharactersPlayableOptionsService } from '../../services/characters-playable-options/characters-playable-options.service';
import { CharactersPlayableService } from '../../services/characters-playable/characters-playable.service';
import { CharactersPlayableFormService } from '../../services/characters-playable-form/characters-playable-form.service';
import { CharactersPlayableMetadataService } from '../../services/characters-playable-metadata/characters-playable-metadata.service';
import { TableCreateFacadeComponent } from '../../../../shared/components/facade/table-create-facade/table-create-facade.component';
import { EventService } from "../../../../core/services/event/event.service";

@Component({
  selector: 'clt-characters-playable-create',
  standalone: true,
  imports: [
    CommonModule,
    DefaultBtnComponent,
    DropdownFieldComponent,
    ReactiveFormsModule,
    ScrollClassDirective,
    TextFieldComponent,
    TranslateModule,
    CheckboxFieldComponent,
    DatetimeFieldComponent,
    ImageFieldComponent,
    RouterLink,
    TableCreateFacadeComponent,
  ],
  templateUrl: './characters-playable-create.component.html',
  styleUrl: './characters-playable-create.component.scss',
})
export class CharactersPlayableCreateComponent
  extends SharedCreate<FormGroup<ICharacterFormBuilder>>
  implements OnInit
{
  public readonly parseFromPage: boolean = true;
  public options!: ICharactersPlayableOptions;

  constructor(
    protected override formBuilder: FormBuilder,
    private formCacheService: FormCacheService,
    private destroyRef: DestroyRef,
    private route: ActivatedRoute,
    private charactersPlayableOptionsService: CharactersPlayableOptionsService,
    private charactersPlayableService: CharactersPlayableService,
    private charactersPlayableFormService: CharactersPlayableFormService,
    private charactersPlayableMetadataService: CharactersPlayableMetadataService,
    private eventService: EventService
  ) {
    super(formBuilder);
  }

  ngOnInit(): void {
    this.initOptions();
    this.initForm();
    this.initParsePageForm();
    this.initCashing();
    this.loadCachedData();
    this.initMetadata(this.charactersPlayableMetadataService.getCreate());
  }

  private initOptions(): void {
    this.options = this.charactersPlayableOptionsService.getOptions();
  }

  private initForm(): void {
    this.form = this.charactersPlayableFormService.getForm();
  }

  protected initCashing(): void {
    this.form.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data): void => {
        this.formCacheService.saveFormData(data);
      });
  }

  protected loadCachedData(): void {
    const cachedData = this.formCacheService.loadFormData();
    if (cachedData) {
      this.form.patchValue(cachedData);
    }
  }

  public save(): void {
    this.charactersPlayableService.createCharacter(
      this.form,
      this.viewLink,
      this.route,
    );
  }

  public loadDataFromPage(): void {
    if (this.parsePageForm.value.pageUrl) {
      this.startLoading();
      this.charactersPlayableService.autocompleteCharacterData(
        this.parsePageForm.value.pageUrl,
        (character: ICharacter): void => {
          this.finishLoading();
          this.form.patchValue(character);
          this.eventService.dataAutocomplete.emit();
        }, () => {
          this.finishLoading();
        },
      );
    }
  }
}
