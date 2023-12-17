import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { convertToUpperDashFormat } from "../../../../core/utilities/request.utility";
import {
  ITalentMaterialApiForm,
  ITalentMaterialForm,
  ITalentMaterialFormBuilder
} from "../../interfaces/form.interface";
import { ETalentMaterialType } from "../../../../core/enums/talent-material-type.enum";
import { EArche } from "../../../characters/enums/arche.enum";
import { EDay } from "../../../../core/enums/day.enum";
import { ITalentMaterial } from "../../interfaces/common.inteface";
import { EMaterialRarity } from "../../../../core/enums/material-rarity.enum";
import { ERegion } from "../../../characters/enums/region.enum";

@Injectable({
  providedIn: 'root'
})
export class TalentMaterialsFormService {
  private readonly form: FormGroup<ITalentMaterialFormBuilder> = this.formBuilder.group({
    nameEn: ['', [Validators.required]],
    nameUa: ['', [Validators.required]],
    nameRu: ['', [Validators.required]],
    descriptionEn: ['', [Validators.required]],
    descriptionUa: ['', [Validators.required]],
    descriptionRu: ['', [Validators.required]],
    type: ['', [Validators.required]],
    rarity: ['', [Validators.required]],
    region: ['', [Validators.required]],
    farmDays: new FormControl<EDay[]>([]),
    icon: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder) {}

  public getForm(): FormGroup<ITalentMaterialFormBuilder> {
    return this.form;
  }

  public convertToForm(talentMaterials: ITalentMaterial): ITalentMaterialForm {
    return {
      nameEn: talentMaterials.name.en,
      nameUa: talentMaterials.name.ua,
      nameRu: talentMaterials.name.ru,
      descriptionEn: talentMaterials.description.en,
      descriptionUa: talentMaterials.description.ua,
      descriptionRu: talentMaterials.description.ru,
      type: talentMaterials.type,
      rarity: talentMaterials.rarity,
      region: talentMaterials.region,
      farmDays: talentMaterials.farmDays,
      icon: talentMaterials.icon,
    };
  }

  public convertToSend(form: FormGroup<ITalentMaterialFormBuilder>): ITalentMaterialApiForm {
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
      type: convertToUpperDashFormat(form.value.type!) as ETalentMaterialType,
      rarity: convertToUpperDashFormat(form.value.rarity!) as EMaterialRarity,
      region: convertToUpperDashFormat(form.value.region!) as ERegion,
      farmDays: form.value.farmDays || [],
      icon: form.value.icon || '',
    };
  }
}
