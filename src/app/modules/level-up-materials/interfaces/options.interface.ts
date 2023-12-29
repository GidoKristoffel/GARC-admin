import { IOption } from "../../../shared/interfaces/input.interface";

export interface ILevelUpMaterialsOptions {
  type: IOption[];
  rarity: IOption[];

  [key: string]: any;
}
