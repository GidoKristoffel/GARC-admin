import { EQuality } from '../enums/quality.enum';
import { EElementType } from '../enums/element-type.enum';
import { ERegion } from '../enums/region.enum';
import { EBonusAttribute } from '../enums/bonus-attribute.enum';
import { EWeapon } from '../enums/weapon.enum';
import { EArche } from '../enums/arche.enum';
import { FormControl } from '@angular/forms';

export interface ICharacterForm {
  nameEn: FormControl<string>;
  nameUa: FormControl<string>;
  nameRu: FormControl<string>;
  quality: FormControl<EQuality | ''>;
  elementalType: FormControl<EElementType | ''>;
  region: FormControl<ERegion | ''>;
  bonusAttribute: FormControl<EBonusAttribute | ''>;
  weapon: FormControl<EWeapon | ''>;
  constellationEn: FormControl<string>;
  constellationUa: FormControl<string>;
  constellationRu: FormControl<string>;
  arche: FormControl<EArche[]>;
  birthday: FormControl<Date | null>;
  titleEn: FormControl<string>;
  titleUa: FormControl<string>;
  titleRu: FormControl<string>;
  affiliationEn: FormControl<string>;
  affiliationUa: FormControl<string>;
  affiliationRu: FormControl<string>;
  icon: FormControl<string>;
  splashArt: FormControl<string>;
  cardIcon: FormControl<string>;
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
