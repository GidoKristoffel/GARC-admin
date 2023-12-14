import { DestroyRef, Injectable } from '@angular/core';
import { EliteBossesApiService } from '../../api/elite-bosses.api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IEliteBoss } from '../../interfaces/common.inteface';
import { IEliteBossViewResponse } from '../../interfaces/api.interfaces';

@Injectable({
  providedIn: 'root',
})
export class EliteBossesViewTableService {
  constructor(
    private destroyRef: DestroyRef,
    private eliteBossesApiService: EliteBossesApiService,
  ) {}

  public convertTableData(data: IEliteBoss): IEliteBoss {
    return data;
  }

  public getEliteBosses(callback: (mobs: IEliteBoss[]) => void): void {
    this.eliteBossesApiService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: IEliteBossViewResponse): void => {
        const mobs: IEliteBoss[] = response.eliteBosses.map((mob: IEliteBoss) =>
          this.convertTableData(mob),
        );
        callback(mobs);
      });
  }

  public deleteEliteBoss(id: string, callback: () => void): void {
    this.eliteBossesApiService
      .delete(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        callback();
      });
  }
}
