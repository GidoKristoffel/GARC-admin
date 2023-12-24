import { Injectable } from '@angular/core';
import { EMaterialRarity } from "../../../../core/enums/material-rarity.enum";
import { IOption } from "../../../../shared/interfaces/input.interface";
import { IAscensionMaterialsOptions } from "../../interfaces/options.interface";
import { EAscensionMaterialType } from "../../../../core/enums/ascension-material-type.enum";

@Injectable({
  providedIn: 'root'
})
export class AscensionMaterialsOptionsService {
  private readonly translateKey: string = 'enum.';

  public getOptions(): IAscensionMaterialsOptions {
    return {
      type: this.generateOptions<typeof EAscensionMaterialType>(EAscensionMaterialType, 'ascension-type'),
      rarity: this.generateOptions<typeof EMaterialRarity>(EMaterialRarity, 'rarity'),
    };
  }

  public generateOptions<T extends Object>(
    enumObject: T,
    translateSubKey: string = '',
  ): IOption[] {
    return Object.values(enumObject).map((value): IOption => {
      return {
        label: this.translateKey + translateSubKey + '.' + value,
        value,
      };
    });
  }
}
