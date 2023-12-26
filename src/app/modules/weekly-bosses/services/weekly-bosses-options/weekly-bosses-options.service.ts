import { Injectable } from '@angular/core';
import { IOptions } from "../../../../shared/interfaces/input.interface";
import { EEnemyType } from "../../../../core/enums/enemy-type.enum";
import { OptionsService } from "../../../../core/services/options/options.service";

@Injectable({
  providedIn: 'root'
})
export class WeeklyBossesOptionsService {
  private readonly translateKey: string = 'enum.';

  constructor(
    private optionsService: OptionsService
  ) {}

  public getOptions(): IOptions {
    return {
      type: this.optionsService.generateOptions<typeof EEnemyType>(EEnemyType, this.translateKey, 'enemy-type'),
    }
  }
}
