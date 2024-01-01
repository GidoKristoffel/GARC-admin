import { IOption, IOptions } from "../../../shared/interfaces/input.interface";

export interface IWeaponMaterialsOptions extends IOptions {
  type: IOption[],
  rarity: IOption[],
  region: IOption[],
  farmDays: IOption[]
}
