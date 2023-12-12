import { Injectable } from '@angular/core';
import { IOption } from '../../../../shared/interfaces/input.interface';
import { EMobType } from '../../enums/mob-type.enum';

@Injectable({
  providedIn: 'root',
})
export class MobsOptionsService {
  private readonly translateKey: string = 'page.enemies.mobs.';

  constructor() {}

  public getOptions(): IOption[] {
    return this.generateOptions<typeof EMobType>(EMobType, 'select.mob-type');
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
