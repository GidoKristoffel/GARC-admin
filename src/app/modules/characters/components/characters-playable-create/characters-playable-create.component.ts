import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultBtnComponent } from '../../../../shared/components/button/default-btn/default-btn.component';
import { DropdownFieldComponent } from '../../../../shared/components/fields/dropdown-field/dropdown-field.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScrollClassDirective } from '../../../../shared/directives/scroll-class/scroll-class.directive';
import { TextFieldComponent } from '../../../../shared/components/fields/text-field/text-field.component';
import { TranslateModule } from '@ngx-translate/core';
import { IOption } from '../../../../shared/interfaces/input.interface';
import { EQuality } from '../../enums/quality.enum';
import { EElementType } from '../../enums/element-type.enum';
import { ERegion } from '../../enums/region.enum';
import { EBonusAttribute } from '../../enums/bonus-attribute.enum';
import { EWeapon } from '../../enums/weapon.enum';
import { CheckboxFieldComponent } from '../../../../shared/components/fields/checkbox-field/checkbox-field.component';
import { DatetimeFieldComponent } from '../../../../shared/components/fields/datetime-field/datetime-field.component';
import { ImageFieldComponent } from '../../../../shared/components/fields/image-field/image-field.component';
import { FormCacheService } from '../../../../core/services/form-cache/form-cache.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CharactersApiService } from '../../api/characters.api.service';
import { convertToUpperDashFormat } from '../../../../core/utilities/request.utility';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ICharacterApiForm, ICharacterFormBuilder } from '../../interfaces/form.interface';
import { SharedCreate } from "../../../../core/classes/shared-create/shared-create";
import { ICharactersPlayableOptions } from "../../interfaces/options.interfaces";
import {
  CharactersPlayableOptionsService
} from "../../services/characters-playable-options/characters-playable-options.service";
import {
  CharactersPlayableFormService
} from "../../services/characters-playable-form/characters-playable-form.service";
import { CharactersPlayableService } from "../../services/characters-playable/characters-playable.service";

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
  ],
  templateUrl: './characters-playable-create.component.html',
  styleUrl: './characters-playable-create.component.scss',
})
export class CharactersPlayableCreateComponent extends SharedCreate<FormGroup<ICharacterFormBuilder>> implements OnInit {
  public options!: ICharactersPlayableOptions;

  constructor(
    protected override formBuilder: FormBuilder,
    private formCacheService: FormCacheService,
    private destroyRef: DestroyRef,
    private charactersPlayableOptionsService: CharactersPlayableOptionsService,
    private charactersPlayableService: CharactersPlayableService
  ) {
    super(formBuilder);
  }

  ngOnInit(): void {
    this.initOptions();
    this.initCashing();
    this.loadCachedData();
  }

  private initOptions(): void {
    this.options = this.charactersPlayableOptionsService.getOptions();
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
    this.charactersPlayableService.createCharacter(this.form, this.viewLink);
  }
}
