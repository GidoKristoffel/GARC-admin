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
    fieldName: 'description',
    label: 'table.view.description',
    type: EHeaderType.TranslateString,
  },
  {
    fieldName: 'abilityDescription',
    label: 'table.view.ability-description',
    type: EHeaderType.TranslateString,
  },
  {
    fieldName: 'type',
    label: 'table.view.type',
    type: EHeaderType.WeaponType,
  },
  {
    fieldName: 'bonusAttribute',
    label: 'table.view.bonus-attribute',
    type: EHeaderType.BonusAttribute,
  },
  {
    fieldName: 'quality',
    label: 'table.view.quality',
    type: EHeaderType.Quality,
  },
  {
    fieldName: 'region',
    label: 'table.view.region',
    type: EHeaderType.Region,
  },
  {
    fieldName: 'splashArtOriginal',
    label: 'table.view.splash-art-original',
    type: EHeaderType.Link,
  },
  {
    fieldName: 'splashArtAwakened',
    label: 'table.view.splash-art-awakened',
    type: EHeaderType.Link,
  },
  {
    fieldName: 'splashArtPneuma',
    label: 'table.view.splash-art-pneuma',
    type: EHeaderType.Link,
  },
  {
    fieldName: 'splashArtOusia',
    label: 'table.view.splash-art-ousia',
    type: EHeaderType.Link,
  },
  {
    fieldName: 'actions',
    label: 'table.view.actions',
    type: EHeaderType.Action,
  },
];
