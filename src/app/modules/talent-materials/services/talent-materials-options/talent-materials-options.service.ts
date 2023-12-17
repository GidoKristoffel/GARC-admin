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
  private readonly translateKey: string = 'page.materials.talent.';

  public getOptions(): ITalentMaterialsOptions {
    return {
      type: this.generateOptions<typeof ETalentMaterialType>(ETalentMaterialType, 'select.type'),
      rarity: this.generateOptions<typeof EMaterialRarity>(EMaterialRarity, 'select.rarity'),
      region: this.generateOptions<typeof ERegion>(ERegion, 'select.region'),
      farmDays: this.generateOptions<typeof EDay>(EDay, 'select.farm-days'),
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
