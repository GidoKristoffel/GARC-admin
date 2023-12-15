import { DestroyRef, Injectable } from '@angular/core';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { WeeklyBossesApiService } from "../../api/weekly-bosses.api.service";
import { IWeeklyBoss } from "../../interfaces/common.inteface";
import { IWeeklyBossViewResponse } from "../../interfaces/api.interfaces";

@Injectable({
  providedIn: 'root'
})
export class WeeklyBossesViewTableService {
  constructor(
    private destroyRef: DestroyRef,
    private weeklyBossesApiService: WeeklyBossesApiService,
  ) {}

  public convertTableData(data: IWeeklyBoss): IWeeklyBoss {
    return data;
  }

  public getWeeklyBosses(callback: (mobs: IWeeklyBoss[]) => void): void {
    this.weeklyBossesApiService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: IWeeklyBossViewResponse): void => {
        const mobs: IWeeklyBoss[] = response.weeklyBosses.map((mob: IWeeklyBoss) =>
          this.convertTableData(mob),
        );
        callback(mobs);
      });
  }

  public deleteWeeklyBoss(id: string, callback: () => void): void {
    this.weeklyBossesApiService
      .delete(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        callback();
      });
  }
}
