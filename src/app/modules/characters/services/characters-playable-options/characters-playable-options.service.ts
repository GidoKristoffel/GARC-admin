import { Injectable } from '@angular/core';
import { EQuality } from "../../enums/quality.enum";
import { EElementType } from "../../enums/element-type.enum";
import { ERegion } from "../../enums/region.enum";
import { EBonusAttribute } from "../../enums/bonus-attribute.enum";
import { EWeapon } from "../../enums/weapon.enum";
import { EArche } from "../../enums/arche.enum";
import { ICharactersPlayableOptions } from "../../interfaces/options.interfaces";
import { OptionsService } from "../../../../core/services/options/options.service";

@Injectable({
  providedIn: 'root'
})
export class CharactersPlayableOptionsService {
  private readonly translateKey: string = 'enum.';

  constructor(
    private optionsService: OptionsService
  ) {}

  public getOptions(): ICharactersPlayableOptions {
    return {
      quality: this.optionsService.generateOptions<typeof EQuality>(EQuality, this.translateKey, 'quality'),
      element: this.optionsService.generateOptions<typeof EElementType>(EElementType, this.translateKey, 'element'),
      region: this.optionsService.generateOptions<typeof ERegion>(ERegion, this.translateKey, 'region'),
      bonusAttribute: this.optionsService.generateOptions<typeof EBonusAttribute>(EBonusAttribute, this.translateKey, 'bonus-attribute'),
      weapon: this.optionsService.generateOptions<typeof EWeapon>(EWeapon, this.translateKey, 'weapon'),
      arche: this.optionsService.generateOptions<typeof EArche>(EArche, this.translateKey, 'arche')
    }
  }
}
