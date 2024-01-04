import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { convertToUpperDashFormat } from "../../../../core/utilities/request.utility";
import { EMaterialRarity } from "../../../../core/enums/material-rarity.enum";
import {
  IEnhancementMaterialApiForm,
  IEnhancementMaterialForm,
  IEnhancementMaterialFormBuilder
} from "../../interfaces/form.interface";
import { IEnhancementMaterial } from "../../interfaces/common.inteface";
import { EEnhancementMaterialType } from "../../../../core/enums/enhancement-material-type.enum";

@Injectable({
  providedIn: 'root'
})
export class EnhancementMaterialsFormService {
  private readonly form: FormGroup<IEnhancementMaterialFormBuilder> = this.formBuilder.group({
    nameEn: ['', [Validators.required]],
    nameUa: ['', [Validators.required]],
    nameRu: ['', [Validators.required]],
    descriptionEn: ['', [Validators.required]],
    descriptionUa: ['', [Validators.required]],
    descriptionRu: ['', [Validators.required]],
    type: ['', [Validators.required]],
    rarity: ['', [Validators.required]],
    icon: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder) {}

  public getForm(): FormGroup<IEnhancementMaterialFormBuilder> {
    return this.form;
  }

  public convertToForm(enhancementMaterials: IEnhancementMaterial): IEnhancementMaterialForm {
    return {
      nameEn: enhancementMaterials.name.en,
      nameUa: enhancementMaterials.name.ua,
      nameRu: enhancementMaterials.name.ru,
      descriptionEn: enhancementMaterials.description.en,
      descriptionUa: enhancementMaterials.description.ua,
      descriptionRu: enhancementMaterials.description.ru,
      type: enhancementMaterials.type,
      rarity: enhancementMaterials.rarity,
      icon: enhancementMaterials.icon,
    };
  }

  public convertToSend(form: FormGroup<IEnhancementMaterialFormBuilder>): IEnhancementMaterialApiForm {
    return {
      name: {
        en: form.value.nameEn || '',
        ua: form.value.nameUa || '',
        ru: form.value.nameRu || '',
      },
      description: {
        en: form.value.descriptionEn || '',
        ua: form.value.descriptionUa || '',
        ru: form.value.descriptionRu || '',
      },
      type: convertToUpperDashFormat(form.value.type!) as EEnhancementMaterialType,
      rarity: convertToUpperDashFormat(form.value.rarity!) as EMaterialRarity,
      icon: form.value.icon || '',
    };
  }
}
