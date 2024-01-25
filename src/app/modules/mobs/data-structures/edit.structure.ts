import { IFormMetadata } from "../../../shared/interfaces/form.interface";
import { EFormType } from "../../../core/enums/form.enum";

export const editMetadata: IFormMetadata[] = [
  {
    fieldName: 'nameEn',
    label: 'page.edit.field.name.en',
    type: EFormType.String,
    option: '',
    language: '',
    valueTranslateKey: '',
    checkboxes: []
  },
  {
    fieldName: 'nameUa',
    label: 'page.edit.field.name.ua',
    type: EFormType.String,
    option: '',
    language: '',
    valueTranslateKey: '',
    checkboxes: []
  },
  {
    fieldName: 'nameRu',
    label: 'page.edit.field.name.ru',
    type: EFormType.String,
    option: '',
    language: '',
    valueTranslateKey: '',
    checkboxes: []
  },
  {
    fieldName: 'descriptionEn',
    label: 'page.edit.field.description.en',
    type: EFormType.Textarea,
    option: '',
    language: '',
    valueTranslateKey: '',
    checkboxes: []
  },
  {
    fieldName: 'descriptionUa',
    label: 'page.edit.field.description.ua',
    type: EFormType.Textarea,
    option: '',
    language: '',
    valueTranslateKey: '',
    checkboxes: []
  },
  {
    fieldName: 'descriptionRu',
    label: 'page.edit.field.description.ru',
    type: EFormType.Textarea,
    option: '',
    language: '',
    valueTranslateKey: '',
    checkboxes: []
  },
  {
    fieldName: 'type',
    label: 'page.edit.field.type',
    type: EFormType.Option,
    option: 'type',
    language: '',
    valueTranslateKey: '',
    checkboxes: []
  },
  {
    fieldName: 'icon',
    label: 'page.edit.field.icon',
    type: EFormType.Image,
    option: '',
    language: '',
    valueTranslateKey: '',
    checkboxes: []
  },
];
