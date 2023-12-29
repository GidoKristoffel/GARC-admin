import { EMaterialRarity } from "../../../core/enums/material-rarity.enum";
import { FormControl } from "@angular/forms";
import { ELevelUpMaterialType } from "../../../core/enums/level-up-material-type.enum";

export interface ILevelUpMaterialForm {
  nameEn: string;
  nameUa: string;
  nameRu: string;
  descriptionEn: string;
  descriptionUa: string;
  descriptionRu: string;
  type: ELevelUpMaterialType;
  rarity: EMaterialRarity;
  icon: string;
}

export interface ILevelUpMaterialFormBuilder {
  nameEn: FormControl<string | null>;
  nameUa: FormControl<string | null>;
  nameRu: FormControl<string | null>;
  descriptionEn: FormControl<string | null>;
  descriptionUa: FormControl<string | null>;
  descriptionRu: FormControl<string | null>;
  type: FormControl<ELevelUpMaterialType | string | null>;
  rarity: FormControl<EMaterialRarity | string | null>;
  icon: FormControl<string | null>;
}

export interface ILevelUpMaterialApiForm {
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
  type: ELevelUpMaterialType;
  rarity: EMaterialRarity;
  icon: string;
}
