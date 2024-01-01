import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { EDay } from "../../../../core/enums/day.enum";
import { convertToUpperDashFormat } from "../../../../core/utilities/request.utility";
import { EMaterialRarity } from "../../../../core/enums/material-rarity.enum";
import { ERegion } from "../../../characters/enums/region.enum";
import {
  IWeaponMaterialApiForm,
  IWeaponMaterialForm,
  IWeaponMaterialFormBuilder
} from "../../interfaces/form.interface";
import { IWeaponMaterial } from "../../interfaces/common.inteface";
import { EWeaponMaterialType } from "../../../../core/enums/weapon-material-type.enum";

@Injectable({
  providedIn: 'root'
})
export class WeaponMaterialsFormService {
  private readonly form: FormGroup<IWeaponMaterialFormBuilder> = this.formBuilder.group({
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

  public getForm(): FormGroup<IWeaponMaterialFormBuilder> {
    return this.form;
  }

  public convertToForm(weaponMaterials: IWeaponMaterial): IWeaponMaterialForm {
    return {
      nameEn: weaponMaterials.name.en,
      nameUa: weaponMaterials.name.ua,
      nameRu: weaponMaterials.name.ru,
      descriptionEn: weaponMaterials.description.en,
      descriptionUa: weaponMaterials.description.ua,
      descriptionRu: weaponMaterials.description.ru,
      type: weaponMaterials.type,
      rarity: weaponMaterials.rarity,
      region: weaponMaterials.region,
      farmDays: weaponMaterials.farmDays,
      icon: weaponMaterials.icon,
    };
  }

  public convertToSend(form: FormGroup<IWeaponMaterialFormBuilder>): IWeaponMaterialApiForm {
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
      type: convertToUpperDashFormat(form.value.type!) as EWeaponMaterialType,
      rarity: convertToUpperDashFormat(form.value.rarity!) as EMaterialRarity,
      region: convertToUpperDashFormat(form.value.region!) as ERegion,
      farmDays: form.value.farmDays || [],
      icon: form.value.icon || '',
    };
  }
}
