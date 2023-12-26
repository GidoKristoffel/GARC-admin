import { IFormMetadata } from "../../../shared/interfaces/form.interface";
import { EFormType } from "../../../core/enums/form.enum";
import { ELanguage } from "../../../core/enums/language.enum";

export const detailsMetadata: IFormMetadata[] = [
  {
    fieldName: 'name',
    label: 'page.enemies.mobs.field.name.en',
    type: EFormType.String,
    option: '',
    language: ELanguage.English,
    valueTranslateKey: '',
    checkboxes: []
  },
  {
    fieldName: 'name',
    label: 'page.enemies.mobs.field.name.ua',
    type: EFormType.String,
    option: '',
    language: ELanguage.Ukrainian,
    valueTranslateKey: '',
    checkboxes: []
  },
  {
    fieldName: 'name',
    label: 'page.enemies.mobs.field.name.ru',
    type: EFormType.String,
    option: '',
    language: ELanguage.Russian,
    valueTranslateKey: '',
    checkboxes: []
  },
  {
    fieldName: 'description',
    label: 'page.enemies.mobs.field.description.en',
    type: EFormType.String,
    option: '',
    language: ELanguage.English,
    valueTranslateKey: '',
    checkboxes: []
  },
  {
    fieldName: 'description',
    label: 'page.enemies.mobs.field.description.ua',
    type: EFormType.String,
    option: '',
    language: ELanguage.Ukrainian,
    valueTranslateKey: '',
    checkboxes: []
  },
  {
    fieldName: 'description',
    label: 'page.enemies.mobs.field.description.ru',
    type: EFormType.String,
    option: '',
    language: ELanguage.Russian,
    valueTranslateKey: '',
    checkboxes: []
  },
  {
    fieldName: 'type',
    label: 'page.enemies.mobs.field.type',
    type: EFormType.Option,
    option: '',
    language: '',
    valueTranslateKey: 'enum.mob-type.',
    checkboxes: []
  },
  {
    fieldName: 'icon',
    label: 'page.enemies.mobs.field.icon',
    type: EFormType.Image,
    option: '',
    language: '',
    valueTranslateKey: '',
    checkboxes: []
  },
];
