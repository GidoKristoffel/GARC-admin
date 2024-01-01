import { EWeaponMaterialType } from "../../../core/enums/weapon-material-type.enum";
import { EMaterialRarity } from "../../../core/enums/material-rarity.enum";
import { ERegion } from "../../characters/enums/region.enum";
import { EDay } from "../../../core/enums/day.enum";
import { FormControl } from "@angular/forms";

export interface IWeaponMaterialForm {
  nameEn: string;
  nameUa: string;
  nameRu: string;
  descriptionEn: string;
  descriptionUa: string;
  descriptionRu: string;
  type: EWeaponMaterialType;
  rarity: EMaterialRarity;
  region: ERegion;
  farmDays: EDay[];
  icon: string;
}

export interface IWeaponMaterialFormBuilder {
  nameEn: FormControl<string | null>;
  nameUa: FormControl<string | null>;
  nameRu: FormControl<string | null>;
  descriptionEn: FormControl<string | null>;
  descriptionUa: FormControl<string | null>;
  descriptionRu: FormControl<string | null>;
  type: FormControl<EWeaponMaterialType | string | null>;
  rarity: FormControl<EMaterialRarity | string | null>;
  region: FormControl<ERegion | string | null>;
  farmDays: FormControl<EDay[] | null>;
  icon: FormControl<string | null>;
}

export interface IWeaponMaterialApiForm {
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
}
