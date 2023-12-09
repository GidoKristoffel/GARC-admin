import { EHeaderType } from '../../core/enums/table.enum';

export interface ITableMetadata {
  fieldName: string;
  label: string;
  type: EHeaderType;
}
