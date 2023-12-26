import { Injectable } from '@angular/core';
import { EMaterialRarity } from "../../../../core/enums/material-rarity.enum";
import { IAscensionMaterialsOptions } from "../../interfaces/options.interface";
import { EAscensionMaterialType } from "../../../../core/enums/ascension-material-type.enum";
import { OptionsService } from "../../../../core/services/options/options.service";

@Injectable({
  providedIn: 'root'
})
export class AscensionMaterialsOptionsService {
  private readonly translateKey: string = 'enum.';

  constructor(
    private optionsService: OptionsService
  ) {}

  public getOptions(): IAscensionMaterialsOptions {
    return {
      type: this.optionsService.generateOptions<typeof EAscensionMaterialType>(EAscensionMaterialType, this.translateKey, 'ascension-type'),
      rarity: this.optionsService.generateOptions<typeof EMaterialRarity>(EMaterialRarity, this.translateKey,  'rarity'),
    };
  }
}
