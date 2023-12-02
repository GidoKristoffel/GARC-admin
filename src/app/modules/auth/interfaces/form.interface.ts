import { EArche } from "../../characters/enums/arche.enum";
import { EQuality } from "../../characters/enums/quality.enum";
import { ERegion } from "../../characters/enums/region.enum";
import { EBonusAttribute } from "../../characters/enums/bonus-attribute.enum";
import { EWeapon } from "../../characters/enums/weapon.enum";
import { EElementType } from "../../characters/enums/element-type.enum";

export interface IAuthorizationForm {
  email: string;
  password: string;
}

export interface ICharacterCreateForm {
  name: {
    en: string;
    ua: string;
    ru: string;
  };
  quality: EQuality;
  elementalType: EElementType;
  region: ERegion;
  bonusAttribute: EBonusAttribute;
  weapon: EWeapon;
  constellation: {
    en: string;
    ua: string;
    ru: string;
  };
  arche: EArche[];
  birthday: Date;
  title: {
    en: string;
    ua: string;
    ru: string;
  };
  affiliation: {
    en: string;
    ua: string;
    ru: string;
  };
  icon: string;
  splashArt: string;
  cardIcon: string;
}
