import { Injectable } from '@angular/core';
import { IOptions } from '../../../../shared/interfaces/input.interface';
import { EMobType } from '../../enums/mob-type.enum';
import { OptionsService } from "../../../../core/services/options/options.service";

@Injectable({
  providedIn: 'root',
})
export class MobsOptionsService {
  private readonly translateKey: string = 'enum.';

  constructor(
    private optionsService: OptionsService
  ) {}

  public getOptions(): IOptions {
    return {
      type: this.optionsService.generateOptions<typeof EMobType>(EMobType, this.translateKey, 'mob-type'),
    }
  }
}
