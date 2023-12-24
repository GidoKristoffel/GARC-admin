import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import {
  ITalentMaterialApiForm,
  ITalentMaterialForm,
  ITalentMaterialFormBuilder
} from "../../../talent-materials/interfaces/form.interface";
import { EDay } from "../../../../core/enums/day.enum";
import { ITalentMaterial } from "../../../talent-materials/interfaces/common.inteface";
import { convertToUpperDashFormat } from "../../../../core/utilities/request.utility";
import { ETalentMaterialType } from "../../../../core/enums/talent-material-type.enum";
import { EMaterialRarity } from "../../../../core/enums/material-rarity.enum";
import { ERegion } from "../../../characters/enums/region.enum";
import {
  IAscensionMaterialApiForm,
  IAscensionMaterialForm,
  IAscensionMaterialFormBuilder
} from "../../interfaces/form.interface";
import { IAscensionMaterial } from "../../interfaces/common.inteface";
import { EAscensionMaterialType } from "../../../../core/enums/ascension-material-type.enum";

@Injectable({
  providedIn: 'root'
})
export class AscensionMaterialsFormService {
  private readonly form: FormGroup<IAscensionMaterialFormBuilder> = this.formBuilder.group({
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

  public getForm(): FormGroup<IAscensionMaterialFormBuilder> {
    return this.form;
  }

  public convertToForm(ascensionMaterials: IAscensionMaterial): IAscensionMaterialForm {
    return {
      nameEn: ascensionMaterials.name.en,
      nameUa: ascensionMaterials.name.ua,
      nameRu: ascensionMaterials.name.ru,
      descriptionEn: ascensionMaterials.description.en,
      descriptionUa: ascensionMaterials.description.ua,
      descriptionRu: ascensionMaterials.description.ru,
      type: ascensionMaterials.type,
      rarity: ascensionMaterials.rarity,
      icon: ascensionMaterials.icon,
    };
  }

  public convertToSend(form: FormGroup<IAscensionMaterialFormBuilder>): IAscensionMaterialApiForm {
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
      type: convertToUpperDashFormat(form.value.type!) as EAscensionMaterialType,
      rarity: convertToUpperDashFormat(form.value.rarity!) as EMaterialRarity,
      icon: form.value.icon || '',
    };
  }
}
