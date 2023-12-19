import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedEdit } from "../../../../core/classes/shared-edit/shared-edit";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { IOption } from "../../../../shared/interfaces/input.interface";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { LanguageService } from "../../../../core/services/language/language.service";
import { ITalentMaterialFormBuilder } from "../../interfaces/form.interface";
import {
  TalentMaterialsMetadataService
} from "../../services/talent-materials-metadata/talent-materials-metadata.service";
import { TalentMaterialsFormService } from "../../services/talent-materials-form/talent-materials-form.service";
import {
  TalentMaterialsOptionsService
} from "../../services/talent-materials-options/talent-materials-options.service";
import { TalentMaterialsService } from "../../services/talent-materials/talent-materials.service";
import { ITalentMaterial } from "../../interfaces/common.inteface";
import { ITalentMaterialsOptions } from "../../interfaces/options.interface";
import { DefaultBtnComponent } from "../../../../shared/components/button/default-btn/default-btn.component";
import { DropdownFieldComponent } from "../../../../shared/components/fields/dropdown-field/dropdown-field.component";
import { ImageFieldComponent } from "../../../../shared/components/fields/image-field/image-field.component";
import { ScrollClassDirective } from "../../../../shared/directives/scroll-class/scroll-class.directive";
import { TextFieldComponent } from "../../../../shared/components/fields/text-field/text-field.component";
import { TranslateModule } from "@ngx-translate/core";
import { CheckboxFieldComponent } from "../../../../shared/components/fields/checkbox-field/checkbox-field.component";

@Component({
  selector: 'clt-talent-materials-edit',
  standalone: true,
  imports: [CommonModule, DefaultBtnComponent, DropdownFieldComponent, ImageFieldComponent, ReactiveFormsModule, ScrollClassDirective, TextFieldComponent, TranslateModule, CheckboxFieldComponent, RouterLink],
  templateUrl: './talent-materials-edit.component.html',
  styleUrl: './talent-materials-edit.component.scss'
})
export class TalentMaterialsEditComponent
  extends SharedEdit<FormGroup<ITalentMaterialFormBuilder>>
  implements OnInit
{
  public options!: ITalentMaterialsOptions;

  constructor(
    private talentMaterialsMetadataService: TalentMaterialsMetadataService,
    private talentMaterialsFormService: TalentMaterialsFormService,
    private talentMaterialsOptionsService: TalentMaterialsOptionsService,
    private talentMaterialsService: TalentMaterialsService,
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
    this.initMetadata(this.talentMaterialsMetadataService.getEdit());
  }

  protected initForm(): void {
    this.form = this.talentMaterialsFormService.getForm();
    if (this.id) {
      this.getCharacterById(this.id);
    }
  }

  private getCharacterById(id: string): void {
    this.talentMaterialsService.getTalentMaterialById(id, (talentMaterial: ITalentMaterial): void => {
      this.form.patchValue(this.talentMaterialsFormService.convertToForm(talentMaterial));
      this.initOptions();
      this.loaded = true;
    });
  }

  private initOptions(): void {
    this.options = this.talentMaterialsOptionsService.getOptions();
  }

  protected save(): void {
    if (this.form && this.id) {
      this.talentMaterialsService.updateTalentMaterial(this.id, this.form, this.detailsLink, this.route);
    }
  }
}
