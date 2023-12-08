import { Injectable } from '@angular/core';
import { IOption } from "../../../../shared/interfaces/input.interface";
import { EQuality } from "../../enums/quality.enum";
import { EElementType } from "../../enums/element-type.enum";
import { ERegion } from "../../enums/region.enum";
import { EBonusAttribute } from "../../enums/bonus-attribute.enum";
import { EWeapon } from "../../enums/weapon.enum";
import { EArche } from "../../enums/arche.enum";
import { ICharactersPlayableOptions } from "../../interfaces/options.interfaces";

@Injectable({
  providedIn: 'root'
})
export class CharactersPlayableOptionsService {
  private readonly translateKey: string = 'page.characters.playable.create.';

  constructor() {}

  public getOptions(): ICharactersPlayableOptions {
    return {
      quality: this.generateOptions<typeof EQuality>(EQuality, 'select.quality'),
      element: this.generateOptions<typeof EElementType>(EElementType, 'select.element'),
      region: this.generateOptions<typeof ERegion>(ERegion, 'select.region'),
      bonusAttribute: this.generateOptions<typeof EBonusAttribute>(EBonusAttribute, 'select.bonus-attribute'),
      weapon: this.generateOptions<typeof EWeapon>(EWeapon, 'select.weapon'),
      arche: this.generateOptions<typeof EArche>(EArche, 'checkbox.arche')
    }
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
