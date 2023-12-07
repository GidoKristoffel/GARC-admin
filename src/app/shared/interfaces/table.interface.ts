import { EHeaderType } from "../../core/enums/table.enum";

export interface ITableMetadata {
  id: string,
  label: string,
  type: EHeaderType
}
