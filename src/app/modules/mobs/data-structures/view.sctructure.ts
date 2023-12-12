import { ITableMetadata } from "../../../shared/interfaces/table.interface";
import { EHeaderType } from "../../../core/enums/table.enum";

export const viewMetadata: ITableMetadata[] = [
  {
    fieldName: 'id',
    label: 'table.enemies.mobs.view.id',
    type: EHeaderType.Id,
  },
  {
    fieldName: 'name',
    label: 'table.enemies.mobs.view.name',
    type: EHeaderType.TranslateString,
  },
  {
    fieldName: 'description',
    label: 'table.enemies.mobs.view.description',
    type: EHeaderType.TranslateString,
  },
  {
    fieldName: 'type',
    label: 'table.enemies.mobs.view.mob-type',
    type: EHeaderType.MobType,
  },
  {
    fieldName: 'icon',
    label: 'table.enemies.mobs.view.icon',
    type: EHeaderType.Link,
  },
  {
    fieldName: 'actions',
    label: 'table.enemies.mobs.view.actions',
    type: EHeaderType.Action,
  },
];
