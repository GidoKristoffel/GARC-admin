import { FormControl } from "@angular/forms";
import { EMobType } from "../enums/mob-type.enum";
import { EQuality } from "../../characters/enums/quality.enum";

export interface IMobForm {
  nameEn: string;
  nameUa: string;
  nameRu: string;
  descriptionEn: string;
  descriptionUa: string;
  descriptionRu: string;
  type: EMobType;
  icon: string;
}

export interface IMobFormBuilder {
  nameEn: FormControl<string | null>;
  nameUa: FormControl<string | null>;
  nameRu: FormControl<string | null>;
  descriptionEn: FormControl<string | null>;
  descriptionUa: FormControl<string | null>;
  descriptionRu: FormControl<string | null>;
  type: FormControl<EMobType | string | null>;
  icon: FormControl<string | null>;
}

export interface IMobApiForm {
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
  type: EMobType;
  icon: string;
}
