import { IOption, IOptions } from "../../../shared/interfaces/input.interface";

export interface IWeaponOptions extends IOptions {
  type: IOption[];
  bonusAttribute: IOption[];
  quality: IOption[];
  region: IOption[];
}
