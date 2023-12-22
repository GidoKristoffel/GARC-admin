import { ITableMetadata } from "../../../shared/interfaces/table.interface";
import { EHeaderType } from "../../../core/enums/table.enum";

export const viewMetadata: ITableMetadata[] = [
  {
    fieldName: 'id',
    label: 'table.materials.ascension.view.id',
    type: EHeaderType.Id,
  },
  {
    fieldName: 'name',
    label: 'table.materials.ascension.view.name',
    type: EHeaderType.TranslateString,
  },
  {
    fieldName: 'description',
    label: 'table.materials.ascension.view.description',
    type: EHeaderType.TranslateString,
  },
  {
    fieldName: 'type',
    label: 'table.materials.ascension.view.type',
    type: EHeaderType.AscensionMaterialType,
  },
  {
    fieldName: 'rarity',
    label: 'table.materials.ascension.view.rarity',
    type: EHeaderType.MaterialRarity,
  },
  {
    fieldName: 'icon',
    label: 'table.materials.ascension.view.icon',
    type: EHeaderType.Link,
  },
  {
    fieldName: 'actions',
    label: 'table.materials.ascension.view.actions',
    type: EHeaderType.Action,
  },
];
