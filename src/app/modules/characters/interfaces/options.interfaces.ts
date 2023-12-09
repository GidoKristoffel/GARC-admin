import { IOption } from "../../../shared/interfaces/input.interface";

export interface ICharactersPlayableOptions {
  quality: IOption[],
  element: IOption[],
  region: IOption[],
  bonusAttribute: IOption[],
  weapon: IOption[],
  arche: IOption[],
  [key: string]: any;
}
