import { IFormMetadata } from "../../../shared/interfaces/form.interface";
import { EFormType } from "../../../core/enums/form.enum";
import { ELanguage } from "../../../core/enums/language.enum";

export const detailsMetadata: IFormMetadata[] = [
  {
    fieldName: 'name',
    label: 'page.details.field.name.en',
    type: EFormType.String,
    option: '',
    language: ELanguage.English,
    valueTranslateKey: '',
    checkboxes: [],
  },
  {
    fieldName: 'name',
    label: 'page.details.field.name.ua',
    type: EFormType.String,
    option: '',
    language: ELanguage.Ukrainian,
    valueTranslateKey: '',
    checkboxes: [],
  },
  {
    fieldName: 'name',
    label: 'page.details.field.name.ru',
    type: EFormType.String,
    option: '',
    language: ELanguage.Russian,
    valueTranslateKey: '',
    checkboxes: [],
  },
  {
    fieldName: 'index',
    label: 'page.details.field.index',
    type: EFormType.Number,
    option: '',
    language: '',
    valueTranslateKey: '',
    checkboxes: [],
  },
];
