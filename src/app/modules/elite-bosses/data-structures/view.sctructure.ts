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
    fieldName: 'type',
    label: 'table.view.mob-type',
    type: EHeaderType.MobType,
  },
  {
    fieldName: 'icon',
    label: 'table.view.icon',
    type: EHeaderType.Link,
  },
  {
    fieldName: 'actions',
    label: 'table.view.actions',
    type: EHeaderType.Action,
  },
];
