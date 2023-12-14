import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { convertToUpperDashFormat } from '../../../../core/utilities/request.utility';
import {
  IEliteBossApiForm,
  IEliteBossForm,
  IEliteBossFormBuilder,
} from '../../interfaces/form.interface';
import { EEnemyType } from '../../../../core/enums/enemy-type.enum';
import { IEliteBoss } from '../../interfaces/common.inteface';

@Injectable({
  providedIn: 'root',
})
export class EliteBossesFormService {
  private readonly form: FormGroup<IEliteBossFormBuilder> =
    this.formBuilder.group({
      nameEn: ['', [Validators.required]],
      nameUa: ['', [Validators.required]],
      nameRu: ['', [Validators.required]],
      descriptionEn: ['', [Validators.required]],
      descriptionUa: ['', [Validators.required]],
      descriptionRu: ['', [Validators.required]],
      type: ['', [Validators.required]],
      icon: ['', [Validators.required]],
    });

  constructor(private formBuilder: FormBuilder) {}

  public getForm(): FormGroup<IEliteBossFormBuilder> {
    return this.form;
  }

  public convertToForm(eliteBoss: IEliteBoss): IEliteBossForm {
    return {
      nameEn: eliteBoss.name.en,
      nameUa: eliteBoss.name.ua,
      nameRu: eliteBoss.name.ru,
      descriptionEn: eliteBoss.description.en,
      descriptionUa: eliteBoss.description.ua,
      descriptionRu: eliteBoss.description.ru,
      type: eliteBoss.type,
      icon: eliteBoss.icon,
    };
  }

  public convertToSend(
    form: FormGroup<IEliteBossFormBuilder>,
  ): IEliteBossApiForm {
    return {
      name: {
        en: form.value.nameEn || '',
        ua: form.value.nameUa || '',
        ru: form.value.nameRu || '',
      },
      description: {
        en: form.value.descriptionEn || '',
        ua: form.value.descriptionUa || '',
        ru: form.value.descriptionRu || '',
      },
      type: convertToUpperDashFormat(form.value.type!) as EEnemyType,
      icon: form.value.icon || '',
    };
  }
}
