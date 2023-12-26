import { Injectable } from '@angular/core';
import { IOption } from "../../../shared/interfaces/input.interface";

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  public generateOptions<T extends Object>(
    enumObject: T,
    translateKey: string = '',
    translateSubKey: string = '',
  ): IOption[] {
    return Object.values(enumObject).map((value): IOption => {
      return {
        label: translateKey + translateSubKey + '.' + value,
        value,
      };
    });
  }
}
