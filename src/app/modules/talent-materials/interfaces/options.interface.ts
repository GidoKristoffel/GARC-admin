import { IOption } from "../../../shared/interfaces/input.interface";

export interface ITalentMaterialsOptions {
  type: IOption[],
  rarity: IOption[],
  region: IOption[],
  farmDays: IOption[],
  [key: string]: any;
}
