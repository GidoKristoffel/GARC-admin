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
    checkboxes: []
  },
  {
    fieldName: 'name',
    label: 'page.details.field.name.ua',
    type: EFormType.String,
    option: '',
    language: ELanguage.Ukrainian,
    valueTranslateKey: '',
    checkboxes: []
  },
  {
    fieldName: 'name',
    label: 'page.details.field.name.ru',
    type: EFormType.String,
    option: '',
    language: ELanguage.Russian,
    valueTranslateKey: '',
    checkboxes: []
  },
  {
    fieldName: 'description',
    label: 'page.details.field.description.en',
    type: EFormType.String,
    option: '',
    language: ELanguage.English,
    valueTranslateKey: '',
    checkboxes: []
  },
  {
    fieldName: 'description',
    label: 'page.details.field.description.ua',
    type: EFormType.String,
    option: '',
    language: ELanguage.Ukrainian,
    valueTranslateKey: '',
    checkboxes: []
  },
  {
    fieldName: 'description',
    label: 'page.details.field.description.ru',
    type: EFormType.String,
    option: '',
    language: ELanguage.Russian,
    valueTranslateKey: '',
    checkboxes: []
  },
  {
    fieldName: 'type',
    label: 'page.details.field.type',
    type: EFormType.Option,
    option: '',
    language: '',
    valueTranslateKey: 'enum.mob-type.',
    checkboxes: []
  },
  {
    fieldName: 'icon',
    label: 'page.details.field.icon',
    type: EFormType.Image,
    option: '',
    language: '',
    valueTranslateKey: '',
    checkboxes: []
  },
];
