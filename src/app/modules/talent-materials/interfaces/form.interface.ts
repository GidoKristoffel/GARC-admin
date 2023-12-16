import { FormControl } from "@angular/forms";
import { ETalentMaterialType } from "../../../core/enums/talent-material-type.enum";
import { EMaterialRarity } from "../../../core/enums/material-rarity.enum";
import { ERegion } from "../../characters/enums/region.enum";
import { EDay } from "../../../core/enums/day.enum";

export interface ITalentMaterialForm {
  nameEn: string;
  nameUa: string;
  nameRu: string;
  descriptionEn: string;
  descriptionUa: string;
  descriptionRu: string;
  type: ETalentMaterialType;
  rarity: EMaterialRarity;
  region: ERegion;
  farmDays: EDay[];
  icon: string;
}

export interface ITalentMaterialFormBuilder {
  nameEn: FormControl<string | null>;
  nameUa: FormControl<string | null>;
  nameRu: FormControl<string | null>;
  descriptionEn: FormControl<string | null>;
  descriptionUa: FormControl<string | null>;
  descriptionRu: FormControl<string | null>;
  type: FormControl<ETalentMaterialType | string | null>;
  rarity: FormControl<EMaterialRarity | string | null>;
  region: FormControl<ERegion | string | null>;
  farmDays: FormControl<EDay | string | null>[];
  icon: FormControl<string | null>;
}

export interface ITalentMaterialApiForm {
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
}
