import { EQuality } from "../enums/quality.enum";
import { EElementType } from "../enums/element-type.enum";
import { ERegion } from "../enums/region.enum";
import { EBonusAttribute } from "../enums/bonus-attribute.enum";
import { EWeapon } from "../enums/weapon.enum";
import { EArche } from "../enums/arche.enum";

export interface IHeader {
  id: string,
  label: string
}

export interface IPlayableCharacterResponse {
  id: string,
  nameEn: string,
  nameUa: string,
  nameRu: string,
  quality: EQuality;
  elementalType: EElementType,
  region: ERegion,
  bonusAttribute: EBonusAttribute,
  weapon: EWeapon,
  constellationEn: string,
  constellationUa: string,
  constellationRu: string,
  arche: EArche[],
  birthday: Date,
  titleEn: string,
  titleUa: string,
  titleRu: string,
  affiliationEn: string,
  affiliationUa: string,
  affiliationRu: string,
  icon: string,
  splashArt: string,
  cardIcon: string,
}

export interface IPlayableCharacter {
  id: string,
  name: {
    en: string,
    ua: string,
    ru: string
  },
  quality: EQuality;
  elementalType: EElementType,
  region: ERegion,
  bonusAttribute: EBonusAttribute,
  weapon: EWeapon,
  constellation: {
    en: string,
    ua: string,
    ru: string
  },
  arche: EArche[],
  birthday: Date,
  title: {
    en: string,
    ua: string,
    ru: string
  },
  affiliation: {
    en: string,
    ua: string,
    ru: string
  },
  icon: string,
  splashArt: string,
  cardIcon: string,
}
