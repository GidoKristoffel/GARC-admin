import { ITableExtendedMetadata } from "../../../shared/interfaces/table.interface";
import { EHeaderType } from "../../../core/enums/table.enum";

export const metadata: ITableExtendedMetadata[] = [
  {
    id: 'nameEn',
    label: 'page.characters.playable.create.field.name.en',
    type: EHeaderType.String,
    option: ''
  },
  {
    id: 'nameUa',
    label: 'page.characters.playable.create.field.name.ua',
    type: EHeaderType.String,
    option: ''
  },
  {
    id: 'nameRu',
    label: 'page.characters.playable.create.field.name.ru',
    type: EHeaderType.String,
    option: ''
  },
  {
    id: 'quality',
    label: 'page.characters.playable.create.field.quality',
    type: EHeaderType.Option,
    option: 'quality'
  },
  {
    id: 'elementalType',
    label: 'page.characters.playable.create.field.elemental-type',
    type: EHeaderType.Option,
    option: 'element'
  },
  {
    id: 'region',
    label: 'page.characters.playable.create.field.region',
    type: EHeaderType.Option,
    option: 'region'
  },
  {
    id: 'bonusAttribute',
    label: 'page.characters.playable.create.field.bonus-attribute',
    type: EHeaderType.Option,
    option: 'bonusAttribute'
  },
  {
    id: 'weapon',
    label: 'page.characters.playable.create.field.weapon',
    type: EHeaderType.Option,
    option: 'weapon'
  },
  {
    id: 'constellationEn',
    label: 'page.characters.playable.create.field.constellation.en',
    type: EHeaderType.String,
    option: ''
  },
  {
    id: 'constellationUa',
    label: 'page.characters.playable.create.field.constellation.ua',
    type: EHeaderType.String,
    option: ''
  },
  {
    id: 'constellationRu',
    label: 'page.characters.playable.create.field.constellation.ru',
    type: EHeaderType.String,
    option: ''
  },
  {
    id: 'arche',
    label: 'page.characters.playable.create.field.arche',
    type: EHeaderType.Checkbox,
    option: 'arche'
  },
  {
    id: 'birthday',
    label: 'page.characters.playable.create.field.birthday',
    type: EHeaderType.Birthday,
    option: ''
  },
  {
    id: 'titleEn',
    label: 'page.characters.playable.create.field.title.en',
    type: EHeaderType.String,
    option: ''
  },
  {
    id: 'titleUa',
    label: 'page.characters.playable.create.field.title.ua',
    type: EHeaderType.String,
    option: ''
  },
  {
    id: 'titleRu',
    label: 'page.characters.playable.create.field.title.ru',
    type: EHeaderType.String,
    option: ''
  },
  {
    id: 'affiliationEn',
    label: 'page.characters.playable.create.field.affiliation.en',
    type: EHeaderType.String,
    option: ''
  },
  {
    id: 'affiliationUa',
    label: 'page.characters.playable.create.field.affiliation.ua',
    type: EHeaderType.String,
    option: ''
  },
  {
    id: 'affiliationRu',
    label: 'page.characters.playable.create.field.affiliation.ru',
    type: EHeaderType.String,
    option: ''
  },
  {
    id: 'icon',
    label: 'page.characters.playable.create.field.icon',
    type: EHeaderType.String,
    option: ''
  },
  {
    id: 'splashArt',
    label: 'page.characters.playable.create.field.splash-art',
    type: EHeaderType.String,
    option: ''
  },
  {
    id: 'cardIcon',
    label: 'page.characters.playable.create.field.card-icon',
    type: EHeaderType.String,
    option: ''
  },

]
