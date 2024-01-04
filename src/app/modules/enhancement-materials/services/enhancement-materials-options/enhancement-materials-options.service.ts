import { Injectable } from '@angular/core';
import { OptionsService } from "../../../../core/services/options/options.service";
import { EMaterialRarity } from "../../../../core/enums/material-rarity.enum";
import { IEnhancementMaterialsOptions } from "../../interfaces/options.interface";
import { EEnhancementMaterialType } from "../../../../core/enums/enhancement-material-type.enum";

@Injectable({
  providedIn: 'root'
})
export class EnhancementMaterialsOptionsService {
  private readonly translateKey: string = 'enum.';

  constructor(
    private optionsService: OptionsService
  ) {}

  public getOptions(): IEnhancementMaterialsOptions {
    return {
      type: this.optionsService.generateOptions<typeof EEnhancementMaterialType>(EEnhancementMaterialType, this.translateKey, 'enhancement-type'),
      rarity: this.optionsService.generateOptions<typeof EMaterialRarity>(EMaterialRarity, this.translateKey,  'rarity'),
    };
  }
}
