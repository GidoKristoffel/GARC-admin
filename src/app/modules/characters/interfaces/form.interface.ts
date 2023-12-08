import { EQuality } from '../enums/quality.enum';
import { EElementType } from '../enums/element-type.enum';
import { ERegion } from '../enums/region.enum';
import { EBonusAttribute } from '../enums/bonus-attribute.enum';
import { EWeapon } from '../enums/weapon.enum';
import { EArche } from '../enums/arche.enum';
import { FormControl } from '@angular/forms';

export interface ICharacter {
  nameEn: string;
  nameUa: string;
  nameRu: string;
  quality: EQuality;
  elementalType: EElementType;
  region: ERegion;
  bonusAttribute: EBonusAttribute;
  weapon: EWeapon;
  constellationEn: string;
  constellationUa: string;
  constellationRu: string;
  arche: EArche[];
  birthday: Date;
  titleEn: string;
  titleUa: string;
  titleRu: string;
  affiliationEn: string;
  affiliationUa: string;
  affiliationRu: string;
  icon: string;
  splashArt: string;
  cardIcon: string;
}

export interface ICharacterFormBuilder {
  nameEn: FormControl<string | null>;
  nameUa: FormControl<string | null>;
  nameRu: FormControl<string | null>;
  quality: FormControl<EQuality | string | null>;
  elementalType: FormControl<EElementType | string | null>;
  region: FormControl<ERegion | string | null>;
  bonusAttribute: FormControl<EBonusAttribute | string | null>;
  weapon: FormControl<EWeapon | string | null>;
  constellationEn: FormControl<string | null>;
  constellationUa: FormControl<string | null>;
  constellationRu: FormControl<string | null>;
  arche: FormControl<EArche[] | null>;
  birthday: FormControl<Date | null>;
  titleEn: FormControl<string | null>;
  titleUa: FormControl<string | null>;
  titleRu: FormControl<string | null>;
  affiliationEn: FormControl<string | null>;
  affiliationUa: FormControl<string | null>;
  affiliationRu: FormControl<string | null>;
  icon: FormControl<string | null>;
  splashArt: FormControl<string | null>;
  cardIcon: FormControl<string | null>;
}

export interface ICharacterApiForm {
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
