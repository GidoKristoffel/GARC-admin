import { EMaterialRarity } from "../../../core/enums/material-rarity.enum";
import { FormControl } from "@angular/forms";
import { EEnhancementMaterialType } from "../../../core/enums/enhancement-material-type.enum";

export interface IEnhancementMaterialForm {
  nameEn: string;
  nameUa: string;
  nameRu: string;
  descriptionEn: string;
  descriptionUa: string;
  descriptionRu: string;
  type: EEnhancementMaterialType;
  rarity: EMaterialRarity;
  icon: string;
}

export interface IEnhancementMaterialFormBuilder {
  nameEn: FormControl<string | null>;
  nameUa: FormControl<string | null>;
  nameRu: FormControl<string | null>;
  descriptionEn: FormControl<string | null>;
  descriptionUa: FormControl<string | null>;
  descriptionRu: FormControl<string | null>;
  type: FormControl<EEnhancementMaterialType | string | null>;
  rarity: FormControl<EMaterialRarity | string | null>;
  icon: FormControl<string | null>;
}

export interface IEnhancementMaterialApiForm {
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
}
