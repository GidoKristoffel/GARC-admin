import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedEdit } from "../../../../core/classes/shared-edit/shared-edit";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { LanguageService } from "../../../../core/services/language/language.service";
import { IAscensionMaterialFormBuilder } from "../../interfaces/form.interface";
import { IAscensionMaterialsOptions } from "../../interfaces/options.interface";
import {
  AscensionMaterialsMetadataService
} from "../../services/ascension-materials-metadata/ascension-materials-metadata.service";
import {
  AscensionMaterialsFormService
} from "../../services/ascension-materials-form/ascension-materials-form.service";
import {
  AscensionMaterialsOptionsService
} from "../../services/ascension-materials-options/ascension-materials-options.service";
import { AscensionMaterialsService } from "../../services/ascension-materials/ascension-materials.service";
import { IAscensionMaterial } from "../../interfaces/common.inteface";
import { CheckboxFieldComponent } from "../../../../shared/components/fields/checkbox-field/checkbox-field.component";
import { DefaultBtnComponent } from "../../../../shared/components/button/default-btn/default-btn.component";
import { DropdownFieldComponent } from "../../../../shared/components/fields/dropdown-field/dropdown-field.component";
import { ImageFieldComponent } from "../../../../shared/components/fields/image-field/image-field.component";
import { ScrollClassDirective } from "../../../../shared/directives/scroll-class/scroll-class.directive";
import { TextFieldComponent } from "../../../../shared/components/fields/text-field/text-field.component";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'clt-ascension-materials-edit',
  standalone: true,
  imports: [CommonModule, CheckboxFieldComponent, DefaultBtnComponent, DropdownFieldComponent, ImageFieldComponent, ReactiveFormsModule, ScrollClassDirective, TextFieldComponent, TranslateModule, RouterLink],
  templateUrl: './ascension-materials-edit.component.html',
  styleUrl: './ascension-materials-edit.component.scss'
})
export class AscensionMaterialsEditComponent
  extends SharedEdit<FormGroup<IAscensionMaterialFormBuilder>>
  implements OnInit
{
  public options!: IAscensionMaterialsOptions;

  constructor(
    private ascensionMaterialsMetadataService: AscensionMaterialsMetadataService,
    private ascensionMaterialsFormService: AscensionMaterialsFormService,
    private ascensionMaterialsOptionsService: AscensionMaterialsOptionsService,
    private ascensionMaterialsService: AscensionMaterialsService,
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
    this.initMetadata(this.ascensionMaterialsMetadataService.getEdit());
  }

  protected initForm(): void {
    this.form = this.ascensionMaterialsFormService.getForm();
    if (this.id) {
      this.getCharacterById(this.id);
    }
  }

  private getCharacterById(id: string): void {
    this.ascensionMaterialsService.getAscensionMaterialById(id, (ascensionMaterial: IAscensionMaterial): void => {
      this.form.patchValue(this.ascensionMaterialsFormService.convertToForm(ascensionMaterial));
      this.initOptions();
      this.loaded = true;
    });
  }

  private initOptions(): void {
    this.options = this.ascensionMaterialsOptionsService.getOptions();
  }

  protected save(): void {
    if (this.form && this.id) {
      this.ascensionMaterialsService.updateAscensionMaterial(this.id, this.form, this.detailsLink, this.route);
    }
  }
}
