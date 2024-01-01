import { EMaterialRarity } from "../../../core/enums/material-rarity.enum";
import { ERegion } from "../../characters/enums/region.enum";
import { EDay } from "../../../core/enums/day.enum";
import { EWeaponMaterialType } from "../../../core/enums/weapon-material-type.enum";

export interface IWeaponMaterial {
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
  type: EWeaponMaterialType;
  rarity: EMaterialRarity;
  region: ERegion;
  farmDays: EDay[];
  icon: string;

  [key: string]: any;
}
