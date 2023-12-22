import { ITableMetadata } from "../../../shared/interfaces/table.interface";
import { EHeaderType } from "../../../core/enums/table.enum";

export const viewMetadata: ITableMetadata[] = [
  {
    fieldName: 'id',
    label: 'table.materials.talent.view.id',
    type: EHeaderType.Id,
  },
  {
    fieldName: 'name',
    label: 'table.materials.talent.view.name',
    type: EHeaderType.TranslateString,
  },
  {
    fieldName: 'description',
    label: 'table.materials.talent.view.description',
    type: EHeaderType.TranslateString,
  },
  {
    fieldName: 'type',
    label: 'table.materials.talent.view.type',
    type: EHeaderType.TalentMaterialType,
  },
  {
    fieldName: 'rarity',
    label: 'table.materials.talent.view.rarity',
    type: EHeaderType.MaterialRarity,
  },
  {
    fieldName: 'icon',
    label: 'table.materials.talent.view.icon',
    type: EHeaderType.Link,
  },
  {
    fieldName: 'actions',
    label: 'table.materials.talent.view.actions',
    type: EHeaderType.Action,
  },
];
