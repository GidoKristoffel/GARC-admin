import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  IMobApiForm,
  IMobForm,
  IMobFormBuilder,
} from '../../interfaces/form.interface';
import { IMob } from '../../interfaces/common.inteface';
import { EMobType } from '../../enums/mob-type.enum';
import { convertToUpperDashFormat } from '../../../../core/utilities/request.utility';

@Injectable({
  providedIn: 'root',
})
export class MobsFormService {
  private readonly form: FormGroup<IMobFormBuilder> = this.formBuilder.group({
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

  public getForm(): FormGroup<IMobFormBuilder> {
    return this.form;
  }

  public convertToForm(mob: IMob): IMobForm {
    return {
      nameEn: mob.name.en,
      nameUa: mob.name.ua,
      nameRu: mob.name.ru,
      descriptionEn: mob.description.en,
      descriptionUa: mob.description.ua,
      descriptionRu: mob.description.ru,
      type: mob.type,
      icon: mob.icon,
    };
  }

  public convertToSend(form: FormGroup<IMobFormBuilder>): IMobApiForm {
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
      type: convertToUpperDashFormat(form.value.type!) as EMobType,
      icon: form.value.icon || '',
    };
  }
}
