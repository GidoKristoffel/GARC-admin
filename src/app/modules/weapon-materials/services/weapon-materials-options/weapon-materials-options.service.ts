import { Injectable } from '@angular/core';
import { OptionsService } from "../../../../core/services/options/options.service";
import { IWeaponMaterialsOptions } from "../../interfaces/options.interface";
import { EWeaponMaterialType } from "../../../../core/enums/weapon-material-type.enum";
import { EMaterialRarity } from "../../../../core/enums/material-rarity.enum";
import { ERegion } from "../../../characters/enums/region.enum";
import { EDay } from "../../../../core/enums/day.enum";

@Injectable({
  providedIn: 'root'
})
export class WeaponMaterialsOptionsService {
  private readonly translateKey: string = 'enum.';

  constructor(
    private optionsService: OptionsService
  ) {}

  public getOptions(): IWeaponMaterialsOptions {
    return {
      type: this.optionsService.generateOptions<typeof EWeaponMaterialType>(EWeaponMaterialType, this.translateKey,  'weapon-type'),
      rarity: this.optionsService.generateOptions<typeof EMaterialRarity>(EMaterialRarity, this.translateKey,  'rarity'),
      region: this.optionsService.generateOptions<typeof ERegion>(ERegion, this.translateKey,  'region'),
      farmDays: this.optionsService.generateOptions<typeof EDay>(EDay, this.translateKey,  'farm-days'),
    };
  }
}
