import { Injectable } from '@angular/core';
import { OptionsService } from "../../../../core/services/options/options.service";
import { EMaterialRarity } from "../../../../core/enums/material-rarity.enum";
import { ELevelUpMaterialType } from "../../../../core/enums/level-up-material-type.enum";
import { ILevelUpMaterialsOptions } from "../../interfaces/options.interface";

@Injectable({
  providedIn: 'root'
})
export class LevelUpMaterialsOptionsService {
  private readonly translateKey: string = 'enum.';

  constructor(
    private optionsService: OptionsService
  ) {}

  public getOptions(): ILevelUpMaterialsOptions {
    return {
      type: this.optionsService.generateOptions<typeof ELevelUpMaterialType>(ELevelUpMaterialType, this.translateKey, 'level-up-type'),
      rarity: this.optionsService.generateOptions<typeof EMaterialRarity>(EMaterialRarity, this.translateKey,  'rarity'),
    };
  }
}
