import { ITableMetadata } from "../../../shared/interfaces/table.interface";
import { EHeaderType } from "../../../core/enums/table.enum";

export const viewMetadata: ITableMetadata[] = [
  {
    fieldName: 'id',
    label: 'table.characters.playable.view.id',
    type: EHeaderType.Id,
  },
  {
    fieldName: 'name',
    label: 'table.characters.playable.view.name',
    type: EHeaderType.TranslateString,
  },
  {
    fieldName: 'quality',
    label: 'table.characters.playable.view.quality',
    type: EHeaderType.Quality,
  },
  {
    fieldName: 'elementalType',
    label: 'table.characters.playable.view.element',
    type: EHeaderType.Element,
  },
  {
    fieldName: 'region',
    label: 'table.characters.playable.view.region',
    type: EHeaderType.Region,
  },
  {
    fieldName: 'bonusAttribute',
    label: 'table.characters.playable.view.bonus-attribute',
    type: EHeaderType.BonusAttribute,
  },
  {
    fieldName: 'weapon',
    label: 'table.characters.playable.view.weapon',
    type: EHeaderType.Weapon,
  },
  {
    fieldName: 'constellation',
    label: 'table.characters.playable.view.constellation',
    type: EHeaderType.TranslateString,
  },
  {
    fieldName: 'arche',
    label: 'table.characters.playable.view.arche',
    type: EHeaderType.Arche,
  },
  {
    fieldName: 'birthday',
    label: 'table.characters.playable.view.birthday',
    type: EHeaderType.Date,
  },
  {
    fieldName: 'title',
    label: 'table.characters.playable.view.title',
    type: EHeaderType.TranslateString,
  },
  {
    fieldName: 'affiliation',
    label: 'table.characters.playable.view.affiliation',
    type: EHeaderType.TranslateString,
  },
  {
    fieldName: 'icon',
    label: 'table.characters.playable.view.icon',
    type: EHeaderType.Link,
  },
  {
    fieldName: 'splashArt',
    label: 'table.characters.playable.view.splash-art',
    type: EHeaderType.Link,
  },
  {
    fieldName: 'cardIcon',
    label: 'table.characters.playable.view.card-icon',
    type: EHeaderType.Link,
  },
  {
    fieldName: 'actions',
    label: 'table.characters.playable.view.actions',
    type: EHeaderType.Action,
  },
];
