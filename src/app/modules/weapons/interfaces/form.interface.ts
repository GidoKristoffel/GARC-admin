import { EWeaponType } from "../../../core/enums/weapon-type.enum";
import { EWeaponBonusAttribute } from "../../../core/enums/weapon-bonus-attribute.enum";
import { EWeaponQuality } from "../../../core/enums/weapon-quality.enum";
import { ERegion } from "../../characters/enums/region.enum";
import { FormControl } from "@angular/forms";

export interface IWeaponForm {
  nameEn: string;
  nameUa: string;
  nameRu: string;
  descriptionEn: string;
  descriptionUa: string;
  descriptionRu: string;
  abilityDescriptionEn: string;
  abilityDescriptionUa: string;
  abilityDescriptionRu: string;
  type: EWeaponType;
  bonusAttribute: EWeaponBonusAttribute;
  quality: EWeaponQuality;
  region: ERegion;
  splashArtOriginal: string;
  splashArtAwakened: string;
  splashArtPneuma: string;
  splashArtOusia: string;
}

export interface IWeaponFormBuilder {
  nameEn: FormControl<string | null>;
  nameUa: FormControl<string | null>;
  nameRu: FormControl<string | null>;
  descriptionEn: FormControl<string | null>;
  descriptionUa: FormControl<string | null>;
  descriptionRu: FormControl<string | null>;
  abilityDescriptionEn: FormControl<string | null>;
  abilityDescriptionUa: FormControl<string | null>;
  abilityDescriptionRu: FormControl<string | null>;
  type: FormControl<EWeaponType | string | null>;
  bonusAttribute: FormControl<EWeaponBonusAttribute | string | null>;
  quality: FormControl<EWeaponQuality | string | null>;
  region: FormControl<ERegion | string | null>;
  splashArtOriginal: FormControl<string | null>;
  splashArtAwakened: FormControl<string | null>;
  splashArtPneuma: FormControl<string | null>;
  splashArtOusia: FormControl<string | null>;
}

export interface IWeaponApiForm {
  name: {
    en: string;
    ua: string;
    ru: string;
  };
  description: {
    en: string;
    ua: string;
    ru: string;
  };
  abilityDescription: {
    en: string;
    ua: string;
    ru: string;
  };
  type: EWeaponType;
  bonusAttribute: EWeaponBonusAttribute;
  quality: EWeaponQuality;
  region: ERegion;
  splashArtOriginal: string;
  splashArtAwakened: string;
  splashArtPneuma: string;
  splashArtOusia: string;
}
