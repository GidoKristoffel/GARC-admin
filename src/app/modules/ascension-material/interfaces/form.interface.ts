import { EMaterialRarity } from "../../../core/enums/material-rarity.enum";
import { ERegion } from "../../characters/enums/region.enum";
import { EDay } from "../../../core/enums/day.enum";
import { FormControl } from "@angular/forms";
import { EAscensionMaterialType } from "../../../core/enums/ascension-material-type.enum";

export interface IAscensionMaterialForm {
  nameEn: string;
  nameUa: string;
  nameRu: string;
  descriptionEn: string;
  descriptionUa: string;
  descriptionRu: string;
  type: EAscensionMaterialType;
  rarity: EMaterialRarity;
  icon: string;
}

export interface IAscensionMaterialFormBuilder {
  nameEn: FormControl<string | null>;
  nameUa: FormControl<string | null>;
  nameRu: FormControl<string | null>;
  descriptionEn: FormControl<string | null>;
  descriptionUa: FormControl<string | null>;
  descriptionRu: FormControl<string | null>;
  type: FormControl<EAscensionMaterialType | string | null>;
  rarity: FormControl<EMaterialRarity | string | null>;
  icon: FormControl<string | null>;
}

export interface IAscensionMaterialApiForm {
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
  region: ERegion;
  farmDays: EDay[];
  icon: string;
}
