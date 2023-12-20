import { IOption } from "../../../shared/interfaces/input.interface";

export interface IAscensionMaterialsOptions {
  type: IOption[];
  rarity: IOption[];

  [key: string]: any;
}
