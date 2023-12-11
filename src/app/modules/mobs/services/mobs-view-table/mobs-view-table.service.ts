import { DestroyRef, Injectable } from '@angular/core';
import { MobsApiService } from '../../api/mobs.api.service';
import { IMob } from '../../interfaces/common.inteface';
import { IPlayableCharacter } from '../../../characters/interfaces/table.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ICharacterViewFormResponse } from '../../../characters/interfaces/api.interfaces';
import { IMobViewResponse } from '../../interfaces/api.interfaces';

@Injectable({
  providedIn: 'root',
})
export class MobsViewTableService {
  constructor(
    private destroyRef: DestroyRef,
    private mobsApiService: MobsApiService,
  ) {}

  public convertTableData(data: IMob): IMob {
    return data;
  }

  public getMobs(callback: (mobs: IMob[]) => void): void {
    this.mobsApiService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: IMobViewResponse): void => {
        const mobs: IMob[] = response.mobs.map((mob: IMob) =>
          this.convertTableData(mob),
        );
        callback(mobs);
      });
  }

  public deleteMob(id: string, callback: () => void): void {
    this.mobsApiService
      .delete(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        callback();
      });
  }
}
