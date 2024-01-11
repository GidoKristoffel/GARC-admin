import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { convertToUpperDashFormat } from "../../../../core/utilities/request.utility";
import { IWeaponApiForm, IWeaponForm, IWeaponFormBuilder } from "../../interfaces/form.interface";
import { IWeapon } from "../../interfaces/common.inteface";
import { EWeaponType } from "../../../../core/enums/weapon-type.enum";
import { EWeaponBonusAttribute } from "../../../../core/enums/weapon-bonus-attribute.enum";
import { EWeaponQuality } from "../../../../core/enums/weapon-quality.enum";
import { ERegion } from "../../../characters/enums/region.enum";

@Injectable({
  providedIn: 'root'
})
export class WeaponFormService {
  private readonly form: FormGroup<IWeaponFormBuilder> = this.formBuilder.group({
    nameEn: ['', [Validators.required]],
    nameUa: ['', [Validators.required]],
    nameRu: ['', [Validators.required]],
    descriptionEn: ['', [Validators.required]],
    descriptionUa: ['', [Validators.required]],
    descriptionRu: ['', [Validators.required]],
    abilityDescriptionEn: ['', [Validators.required]],
    abilityDescriptionUa: ['', [Validators.required]],
    abilityDescriptionRu: ['', [Validators.required]],
    type: ['', [Validators.required]],
    bonusAttribute: ['', [Validators.required]],
    quality: ['', [Validators.required]],
    region: ['', [Validators.required]],
    splashArtOriginal: ['', [Validators.required]],
    splashArtAwakened: ['', [Validators.required]],
    splashArtPneuma: ['', [Validators.required]],
    splashArtOusia: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder) {}

  public getForm(): FormGroup<IWeaponFormBuilder> {
    return this.form;
  }

  public convertToForm(weapons: IWeapon): IWeaponForm {
    return {
      nameEn: weapons.name.en,
      nameUa: weapons.name.ua,
      nameRu: weapons.name.ru,
      descriptionEn: weapons.description.en,
      descriptionUa: weapons.description.ua,
      descriptionRu: weapons.description.ru,
      abilityDescriptionEn: weapons.description.en,
      abilityDescriptionUa: weapons.description.ua,
      abilityDescriptionRu: weapons.description.ru,
      type: weapons.type,
      bonusAttribute: weapons.bonusAttribute,
      quality: weapons.quality,
      region: weapons.region,
      splashArtOriginal: weapons.splashArtOriginal,
      splashArtAwakened: weapons.splashArtAwakened,
      splashArtPneuma: weapons.splashArtPneuma,
      splashArtOusia: weapons.splashArtOusia,
    };
  }

  public convertToSend(form: FormGroup<IWeaponFormBuilder>): IWeaponApiForm {
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
      abilityDescription: {
        en: form.value.abilityDescriptionEn || '',
        ua: form.value.abilityDescriptionUa || '',
        ru: form.value.abilityDescriptionRu || '',
      },
      type: convertToUpperDashFormat(form.value.type!) as EWeaponType,
      bonusAttribute: convertToUpperDashFormat(form.value.bonusAttribute!) as EWeaponBonusAttribute,
      quality: convertToUpperDashFormat(form.value.quality!) as EWeaponQuality,
      region: convertToUpperDashFormat(form.value.region!) as ERegion,
      splashArtOriginal: form.value.splashArtOriginal || '',
      splashArtAwakened: form.value.splashArtAwakened || '',
      splashArtPneuma: form.value.splashArtPneuma || '',
      splashArtOusia: form.value.splashArtOusia || '',
    };
  }
}
