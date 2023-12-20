import { EMaterialRarity } from "../../../core/enums/material-rarity.enum";
import { EAscensionMaterialType } from "../../../core/enums/ascension-material-type.enum";

export interface IAscensionMaterial {
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
  type: EAscensionMaterialType;
  rarity: EMaterialRarity;
  icon: string;

  [key: string]: any;
}
