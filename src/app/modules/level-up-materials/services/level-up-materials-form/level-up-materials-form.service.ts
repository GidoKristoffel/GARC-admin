import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { convertToUpperDashFormat } from "../../../../core/utilities/request.utility";
import { EMaterialRarity } from "../../../../core/enums/material-rarity.enum";
import {
  ILevelUpMaterialApiForm,
  ILevelUpMaterialForm,
  ILevelUpMaterialFormBuilder
} from "../../interfaces/form.interface";
import { ILevelUpMaterial } from "../../interfaces/common.inteface";
import { ELevelUpMaterialType } from "../../../../core/enums/level-up-material-type.enum";

@Injectable({
  providedIn: 'root'
})
export class LevelUpMaterialsFormService {
  private readonly form: FormGroup<ILevelUpMaterialFormBuilder> = this.formBuilder.group({
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

  public getForm(): FormGroup<ILevelUpMaterialFormBuilder> {
    return this.form;
  }

  public convertToForm(levelUpMaterials: ILevelUpMaterial): ILevelUpMaterialForm {
    return {
      nameEn: levelUpMaterials.name.en,
      nameUa: levelUpMaterials.name.ua,
      nameRu: levelUpMaterials.name.ru,
      descriptionEn: levelUpMaterials.description.en,
      descriptionUa: levelUpMaterials.description.ua,
      descriptionRu: levelUpMaterials.description.ru,
      type: levelUpMaterials.type,
      rarity: levelUpMaterials.rarity,
      icon: levelUpMaterials.icon,
    };
  }

  public convertToSend(form: FormGroup<ILevelUpMaterialFormBuilder>): ILevelUpMaterialApiForm {
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
      type: convertToUpperDashFormat(form.value.type!) as ELevelUpMaterialType,
      rarity: convertToUpperDashFormat(form.value.rarity!) as EMaterialRarity,
      icon: form.value.icon || '',
    };
  }
}
