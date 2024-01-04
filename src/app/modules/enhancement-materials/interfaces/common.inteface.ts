import { EEnhancementMaterialType } from "../../../core/enums/enhancement-material-type.enum";
import { EMaterialRarity } from "../../../core/enums/material-rarity.enum";

export interface IEnhancementMaterial {
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
  type: EEnhancementMaterialType;
  rarity: EMaterialRarity;
  icon: string;

  [key: string]: any;
}
