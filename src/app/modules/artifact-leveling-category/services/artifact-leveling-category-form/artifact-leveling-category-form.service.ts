import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  IArtifactLevelingCategoryApiForm,
  IArtifactLevelingCategoryForm,
  IArtifactLevelingCategoryFormBuilder
} from "../../interfaces/form.interface";
import { IArtifactLevelingCategory } from "../../interfaces/common.inteface";

@Injectable({
  providedIn: 'root'
})
export class ArtifactLevelingCategoryFormService {
  private readonly form: FormGroup<IArtifactLevelingCategoryFormBuilder> = this.formBuilder.group({
    nameEn: ['', [Validators.required]],
    nameUa: ['', [Validators.required]],
    nameRu: ['', [Validators.required]],
    index: [-1, [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder) {}

  public getForm(): FormGroup<IArtifactLevelingCategoryFormBuilder> {
    return this.form;
  }

  public convertToForm(artifactLevelingCategorys: IArtifactLevelingCategory): IArtifactLevelingCategoryForm {
    return {
      nameEn: artifactLevelingCategorys.name.en,
      nameUa: artifactLevelingCategorys.name.ua,
      nameRu: artifactLevelingCategorys.name.ru,
      index: artifactLevelingCategorys.index,
    };
  }

  public convertToSend(form: FormGroup<IArtifactLevelingCategoryFormBuilder>): IArtifactLevelingCategoryApiForm {
    return {
      name: {
        en: form.value.nameEn || '',
        ua: form.value.nameUa || '',
        ru: form.value.nameRu || '',
      },
      index: form.value.index || -1,
    };
  }
}
