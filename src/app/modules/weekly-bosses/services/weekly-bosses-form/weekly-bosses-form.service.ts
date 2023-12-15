import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { convertToUpperDashFormat } from '../../../../core/utilities/request.utility';
import { EEnemyType } from '../../../../core/enums/enemy-type.enum';
import {
  IWeeklyBossApiForm,
  IWeeklyBossForm,
  IWeeklyBossFormBuilder,
} from '../../interfaces/form.interface';
import { IWeeklyBoss } from '../../interfaces/common.inteface';

@Injectable({
  providedIn: 'root',
})
export class WeeklyBossesFormService {
  private readonly form: FormGroup<IWeeklyBossFormBuilder> =
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

  public getForm(): FormGroup<IWeeklyBossFormBuilder> {
    return this.form;
  }

  public convertToForm(weeklyBoss: IWeeklyBoss): IWeeklyBossForm {
    return {
      nameEn: weeklyBoss.name.en,
      nameUa: weeklyBoss.name.ua,
      nameRu: weeklyBoss.name.ru,
      descriptionEn: weeklyBoss.description.en,
      descriptionUa: weeklyBoss.description.ua,
      descriptionRu: weeklyBoss.description.ru,
      type: weeklyBoss.type,
      icon: weeklyBoss.icon,
    };
  }

  public convertToSend(
    form: FormGroup<IWeeklyBossFormBuilder>,
  ): IWeeklyBossApiForm {
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
