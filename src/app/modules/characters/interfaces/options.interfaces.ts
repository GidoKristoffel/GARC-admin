import { IOption, IOptions } from "../../../shared/interfaces/input.interface";

export interface ICharactersPlayableOptions extends IOptions {
  quality: IOption[],
  element: IOption[],
  region: IOption[],
  bonusAttribute: IOption[],
  weapon: IOption[],
  arche: IOption[],
}
