import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EArche } from '../../enums/arche.enum';
import {
  ICharacter,
  ICharacterApiForm,
  ICharacterFormBuilder,
} from '../../interfaces/form.interface';
import { IPlayableCharacter } from '../../interfaces/table.interface';
import { convertToUpperDashFormat } from '../../../../core/utilities/request.utility';
import { EQuality } from '../../enums/quality.enum';
import { EElementType } from '../../enums/element-type.enum';
import { ERegion } from '../../enums/region.enum';
import { EBonusAttribute } from '../../enums/bonus-attribute.enum';
import { EWeapon } from '../../enums/weapon.enum';
import { IFormMetadata } from "../../../../shared/interfaces/form.interface";

@Injectable({
  providedIn: 'root',
})
export class CharactersPlayableFormService {
  private readonly form: FormGroup<ICharacterFormBuilder> =
    this.formBuilder.group({
      nameEn: ['', [Validators.required]],
      nameUa: ['', [Validators.required]],
      nameRu: ['', [Validators.required]],
      quality: ['', [Validators.required]],
      elementalType: ['', [Validators.required]],
      region: ['', [Validators.required]],
      bonusAttribute: ['', [Validators.required]],
      weapon: ['', [Validators.required]],
      constellationEn: ['', [Validators.required]],
      constellationUa: ['', [Validators.required]],
      constellationRu: ['', [Validators.required]],
      arche: new FormControl<EArche[]>([]),
      birthday: [new FormControl<Date | null>(null), [Validators.required]],
      titleEn: ['', [Validators.required]],
      titleUa: ['', [Validators.required]],
      titleRu: ['', [Validators.required]],
      affiliationEn: ['', [Validators.required]],
      affiliationUa: ['', [Validators.required]],
      affiliationRu: ['', [Validators.required]],
      icon: ['', [Validators.required]],
      splashArt: ['', [Validators.required]],
      cardIcon: ['', [Validators.required]],
    });

  constructor(private formBuilder: FormBuilder) {}

  public getForm(): FormGroup<ICharacterFormBuilder> {
    return this.form;
  }

  public convertToForm(character: IPlayableCharacter): ICharacter {
    return {
      nameEn: character.name.en,
      nameUa: character.name.ua,
      nameRu: character.name.ru,
      quality: character.quality,
      elementalType: character.elementalType,
      region: character.region,
      bonusAttribute: character.bonusAttribute,
      weapon: character.weapon,
      constellationEn: character.constellation.en,
      constellationUa: character.constellation.ua,
      constellationRu: character.constellation.ru,
      arche: character.arche,
      birthday: character.birthday,
      titleEn: character.title.en,
      titleUa: character.title.ua,
      titleRu: character.title.ru,
      affiliationEn: character.affiliation.en,
      affiliationUa: character.affiliation.ua,
      affiliationRu: character.affiliation.ru,
      icon: character.icon,
      splashArt: character.splashArt,
      cardIcon: character.cardIcon,
    };
  }

  public convertToSend(
    form: FormGroup<ICharacterFormBuilder>,
  ): ICharacterApiForm {
    return {
      name: {
        en: form.value.nameEn || '',
        ua: form.value.nameUa || '',
        ru: form.value.nameRu || '',
      },
      quality: convertToUpperDashFormat(form.value.quality!) as EQuality,
      elementalType: convertToUpperDashFormat(
        form.value.elementalType!,
      ) as EElementType,
      region: convertToUpperDashFormat(form.value.region!) as ERegion,
      bonusAttribute: convertToUpperDashFormat(
        form.value.bonusAttribute!,
      ) as EBonusAttribute,
      weapon: convertToUpperDashFormat(form.value.weapon!) as EWeapon,
      constellation: {
        en: form.value.constellationEn || '',
        ua: form.value.constellationUa || '',
        ru: form.value.constellationRu || '',
      },
      arche: form.value.arche || [],
      birthday: form.value.birthday || new Date(),
      title: {
        en: form.value.titleEn || '',
        ua: form.value.titleUa || '',
        ru: form.value.titleRu || '',
      },
      affiliation: {
        en: form.value.affiliationEn || '',
        ua: form.value.affiliationUa || '',
        ru: form.value.affiliationRu || '',
      },
      icon: form.value.icon || '',
      splashArt: form.value.splashArt || '',
      cardIcon: form.value.cardIcon || '',
    };
  }
}
