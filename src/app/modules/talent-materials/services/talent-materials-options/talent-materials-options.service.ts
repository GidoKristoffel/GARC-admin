import { Injectable } from '@angular/core';
import { IOption } from "../../../../shared/interfaces/input.interface";
import { ETalentMaterialType } from "../../../../core/enums/talent-material-type.enum";
import { EMaterialRarity } from "../../../../core/enums/material-rarity.enum";
import { ERegion } from "../../../characters/enums/region.enum";
import { EDay } from "../../../../core/enums/day.enum";
import { ITalentMaterialsOptions } from "../../interfaces/options.interface";

@Injectable({
  providedIn: 'root'
})
export class TalentMaterialsOptionsService {
  private readonly translateKey: string = 'enum.';

  public getOptions(): ITalentMaterialsOptions {
    return {
      type: this.generateOptions<typeof ETalentMaterialType>(ETalentMaterialType, 'talent-type'),
      rarity: this.generateOptions<typeof EMaterialRarity>(EMaterialRarity, 'rarity'),
      region: this.generateOptions<typeof ERegion>(ERegion, 'region'),
      farmDays: this.generateOptions<typeof EDay>(EDay, 'farm-days'),
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
