import { ITableMetadata } from "../../../shared/interfaces/table.interface";
import { EHeaderType } from "../../../core/enums/table.enum";

export const viewMetadata: ITableMetadata[] = [
  {
    fieldName: 'id',
    label: 'table.view.id',
    type: EHeaderType.Id,
  },
  {
    fieldName: 'name',
    label: 'table.view.name',
    type: EHeaderType.TranslateString,
  },
  {
    fieldName: 'quality',
    label: 'table.view.quality',
    type: EHeaderType.Quality,
  },
  {
    fieldName: 'elementalType',
    label: 'table.view.element',
    type: EHeaderType.Element,
  },
  {
    fieldName: 'region',
    label: 'table.view.region',
    type: EHeaderType.Region,
  },
  {
    fieldName: 'bonusAttribute',
    label: 'table.view.bonus-attribute',
    type: EHeaderType.BonusAttribute,
  },
  {
    fieldName: 'weapon',
    label: 'table.view.weapon',
    type: EHeaderType.Weapon,
  },
  {
    fieldName: 'constellation',
    label: 'table.view.constellation',
    type: EHeaderType.TranslateString,
  },
  {
    fieldName: 'arche',
    label: 'table.view.arche',
    type: EHeaderType.Arche,
  },
  {
    fieldName: 'birthday',
    label: 'table.view.birthday',
    type: EHeaderType.Date,
  },
  {
    fieldName: 'title',
    label: 'table.view.title',
    type: EHeaderType.TranslateString,
  },
  {
    fieldName: 'affiliation',
    label: 'table.view.affiliation',
    type: EHeaderType.TranslateString,
  },
  {
    fieldName: 'icon',
    label: 'table.view.icon',
    type: EHeaderType.Link,
  },
  {
    fieldName: 'splashArt',
    label: 'table.view.splash-art',
    type: EHeaderType.Link,
  },
  {
    fieldName: 'cardIcon',
    label: 'table.view.card-icon',
    type: EHeaderType.Link,
  },
  {
    fieldName: 'actions',
    label: 'table.view.actions',
    type: EHeaderType.Action,
  },
];
