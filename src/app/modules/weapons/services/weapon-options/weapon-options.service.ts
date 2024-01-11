import { Injectable } from '@angular/core';
import { OptionsService } from "../../../../core/services/options/options.service";
import { IWeaponOptions } from "../../interfaces/options.interface";
import { EWeaponType } from "../../../../core/enums/weapon-type.enum";
import { EWeaponBonusAttribute } from "../../../../core/enums/weapon-bonus-attribute.enum";
import { EWeaponQuality } from "../../../../core/enums/weapon-quality.enum";
import { ERegion } from "../../../characters/enums/region.enum";

@Injectable({
  providedIn: 'root'
})
export class WeaponOptionsService {
  private readonly translateKey: string = 'enum.';

  constructor(
    private optionsService: OptionsService
  ) {}

  public getOptions(): IWeaponOptions {
    return {
      type: this.optionsService.generateOptions<typeof EWeaponType>(EWeaponType, this.translateKey, 'type'),
      bonusAttribute: this.optionsService.generateOptions<typeof EWeaponBonusAttribute>(EWeaponBonusAttribute, this.translateKey, 'weapon-bonus-attribute'),
      quality: this.optionsService.generateOptions<typeof EWeaponQuality>(EWeaponQuality, this.translateKey, 'quality'),
      region: this.optionsService.generateOptions<typeof ERegion>(ERegion, this.translateKey, 'region'),
    };
  }
}
