import { IFormMetadata } from "../../../shared/interfaces/form.interface";
import { EFormType } from "../../../core/enums/form.enum";
import { ELanguage } from "../../../core/enums/language.enum";

export const detailsMetadata: IFormMetadata[] = [
  {
    fieldName: 'name',
    label: 'page.enemies.elite-bosses.field.name.en',
    type: EFormType.String,
    option: '',
    language: ELanguage.English,
    valueTranslateKey: '',
    checkboxes: []
  },
  {
    fieldName: 'name',
    label: 'page.enemies.elite-bosses.field.name.ua',
    type: EFormType.String,
    option: '',
    language: ELanguage.Ukrainian,
    valueTranslateKey: '',
    checkboxes: []
  },
  {
    fieldName: 'name',
    label: 'page.enemies.elite-bosses.field.name.ru',
    type: EFormType.String,
    option: '',
    language: ELanguage.Russian,
    valueTranslateKey: '',
    checkboxes: []
  },
  {
    fieldName: 'description',
    label: 'page.enemies.elite-bosses.field.description.en',
    type: EFormType.String,
    option: '',
    language: ELanguage.English,
    valueTranslateKey: '',
    checkboxes: []
  },
  {
    fieldName: 'description',
    label: 'page.enemies.elite-bosses.field.description.ua',
    type: EFormType.String,
    option: '',
    language: ELanguage.Ukrainian,
    valueTranslateKey: '',
    checkboxes: []
  },
  {
    fieldName: 'description',
    label: 'page.enemies.elite-bosses.field.description.ru',
    type: EFormType.String,
    option: '',
    language: ELanguage.Russian,
    valueTranslateKey: '',
    checkboxes: []
  },
  {
    fieldName: 'type',
    label: 'page.enemies.elite-bosses.field.type',
    type: EFormType.Option,
    option: '',
    language: '',
    valueTranslateKey: 'page.enemies.elite-bosses.select.mob-type.',
    checkboxes: []
  },
  {
    fieldName: 'icon',
    label: 'page.enemies.elite-bosses.field.icon',
    type: EFormType.Image,
    option: '',
    language: '',
    valueTranslateKey: '',
    checkboxes: []
  },
];
