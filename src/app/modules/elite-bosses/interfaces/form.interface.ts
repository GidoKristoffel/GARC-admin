import { FormControl } from "@angular/forms";
import { EEnemyType } from "../../../core/enums/enemy-type.enum";

export interface IEliteBossForm {
  nameEn: string;
  nameUa: string;
  nameRu: string;
  descriptionEn: string;
  descriptionUa: string;
  descriptionRu: string;
  type: EEnemyType;
  icon: string;
}

export interface IEliteBossFormBuilder {
  nameEn: FormControl<string | null>;
  nameUa: FormControl<string | null>;
  nameRu: FormControl<string | null>;
  descriptionEn: FormControl<string | null>;
  descriptionUa: FormControl<string | null>;
  descriptionRu: FormControl<string | null>;
  type: FormControl<EEnemyType | string | null>;
  icon: FormControl<string | null>;
}

export interface IEliteBossApiForm {
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
  type: EEnemyType;
  icon: string;
}
