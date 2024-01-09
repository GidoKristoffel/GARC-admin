import { EWeaponType } from "../../../core/enums/weapon-type.enum";
import { EWeaponBonusAttribute } from "../../../core/enums/weapon-bonus-attribute.enum";
import { EWeaponQuality } from "../../../core/enums/weapon-quality.enum";
import { ERegion } from "../../characters/enums/region.enum";

export interface IWeapon {
  id: string;
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

  [key: string]: any;
}
