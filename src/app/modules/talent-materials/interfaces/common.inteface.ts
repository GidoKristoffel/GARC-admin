import { ETalentMaterialType } from "../../../core/enums/talent-material-type.enum";
import { EMaterialRarity } from "../../../core/enums/material-rarity.enum";
import { ERegion } from "../../characters/enums/region.enum";
import { EDay } from "../../../core/enums/day.enum";

export interface ITalentMaterial {
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
  type: ETalentMaterialType;
  rarity: EMaterialRarity;
  region: ERegion;
  farmDays: EDay[];
  icon: string;

  [key: string]: any;
}
