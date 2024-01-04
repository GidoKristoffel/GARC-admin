import { IOption } from "../../../shared/interfaces/input.interface";

export interface IEnhancementMaterialsOptions {
  type: IOption[];
  rarity: IOption[];

  [key: string]: any;
}
