import { Injectable } from '@angular/core';
import { IOption } from "../../../../shared/interfaces/input.interface";
import { EEnemyType } from "../../../../core/enums/enemy-type.enum";

@Injectable({
  providedIn: 'root'
})
export class EliteBossesOptionsService {
  private readonly translateKey: string = 'enum.';

  constructor() { }

  public getOptions(): IOption[] {
    return this.generateOptions<typeof EEnemyType>(EEnemyType, 'enemy-type');
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
