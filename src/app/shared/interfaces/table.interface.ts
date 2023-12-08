import { EHeaderType } from '../../core/enums/table.enum';

export interface ITableMetadata {
  id: string;
  label: string;
  type: EHeaderType;
}

export interface ITableExtendedMetadata extends ITableMetadata {
  option: string;
}
