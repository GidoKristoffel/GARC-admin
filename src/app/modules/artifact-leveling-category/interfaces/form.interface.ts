import { FormControl } from "@angular/forms";

export interface IArtifactLevelingCategoryForm {
  nameEn: string;
  nameUa: string;
  nameRu: string;
  index: number;
}

export interface IArtifactLevelingCategoryFormBuilder {
  nameEn: FormControl<string | null>;
  nameUa: FormControl<string | null>;
  nameRu: FormControl<string | null>;
  index: FormControl<number | null>;
}

export interface IAscensionMaterialApiForm {
  name: {
    en: string;
    ua: string;
    ru: string;
  };
  index: number;
}
