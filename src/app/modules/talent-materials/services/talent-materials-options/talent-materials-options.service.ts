import { Injectable } from '@angular/core';
import { ETalentMaterialType } from "../../../../core/enums/talent-material-type.enum";
import { EMaterialRarity } from "../../../../core/enums/material-rarity.enum";
import { ERegion } from "../../../characters/enums/region.enum";
import { EDay } from "../../../../core/enums/day.enum";
import { ITalentMaterialsOptions } from "../../interfaces/options.interface";
import { OptionsService } from "../../../../core/services/options/options.service";

@Injectable({
  providedIn: 'root'
})
export class TalentMaterialsOptionsService {
  private readonly translateKey: string = 'enum.';

  constructor(
    private optionsService: OptionsService
  ) {}

  public getOptions(): ITalentMaterialsOptions {
    return {
      type: this.optionsService.generateOptions<typeof ETalentMaterialType>(ETalentMaterialType, this.translateKey,  'talent-type'),
      rarity: this.optionsService.generateOptions<typeof EMaterialRarity>(EMaterialRarity, this.translateKey,  'rarity'),
      region: this.optionsService.generateOptions<typeof ERegion>(ERegion, this.translateKey,  'region'),
      farmDays: this.optionsService.generateOptions<typeof EDay>(EDay, this.translateKey,  'farm-days'),
    };
  }
}
