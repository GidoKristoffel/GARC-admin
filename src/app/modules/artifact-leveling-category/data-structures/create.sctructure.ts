import { IFormMetadata } from "../../../shared/interfaces/form.interface";
import { EFormType } from "../../../core/enums/form.enum";

export const createMetadata: IFormMetadata[] = [
  {
    fieldName: 'nameEn',
    label: 'page.create.field.name.en',
    type: EFormType.String,
    option: '',
    language: '',
    valueTranslateKey: '',
    checkboxes: [],
  },
  {
    fieldName: 'nameUa',
    label: 'page.create.field.name.ua',
    type: EFormType.String,
    option: '',
    language: '',
    valueTranslateKey: '',
    checkboxes: [],
  },
  {
    fieldName: 'nameRu',
    label: 'page.create.field.name.ru',
    type: EFormType.String,
    option: '',
    language: '',
    valueTranslateKey: '',
    checkboxes: [],
  },
  {
    fieldName: 'index',
    label: 'page.create.field.description.en',
    type: EFormType.Number,
    option: '',
    language: '',
    valueTranslateKey: '',
    checkboxes: [],
  },
];
