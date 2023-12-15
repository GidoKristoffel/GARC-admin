import { ITableMetadata } from "../../../shared/interfaces/table.interface";
import { EHeaderType } from "../../../core/enums/table.enum";

export const viewMetadata: ITableMetadata[] = [
  {
    fieldName: 'id',
    label: 'table.enemies.weekly-bosses.view.id',
    type: EHeaderType.Id,
  },
  {
    fieldName: 'name',
    label: 'table.enemies.weekly-bosses.view.name',
    type: EHeaderType.TranslateString,
  },
  {
    fieldName: 'description',
    label: 'table.enemies.weekly-bosses.view.description',
    type: EHeaderType.TranslateString,
  },
  {
    fieldName: 'type',
    label: 'table.enemies.weekly-bosses.view.mob-type',
    type: EHeaderType.MobType,
  },
  {
    fieldName: 'icon',
    label: 'table.enemies.weekly-bosses.view.icon',
    type: EHeaderType.Link,
  },
  {
    fieldName: 'actions',
    label: 'table.enemies.elite-bosses.view.actions',
    type: EHeaderType.Action,
  },
];
