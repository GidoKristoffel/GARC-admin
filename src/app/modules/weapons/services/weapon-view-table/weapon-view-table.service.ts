import { DestroyRef, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { WeaponsApiService } from '../../api/weapons.api.service';
import { IWeapon } from '../../interfaces/common.inteface';
import { IWeaponViewResponse } from '../../interfaces/api.interfaces';

@Injectable({
  providedIn: 'root',
})
export class WeaponViewTableService {
  constructor(
    private destroyRef: DestroyRef,
    private weaponsApiService: WeaponsApiService,
  ) {}

  public convertTableData(data: IWeapon): IWeapon {
    return data;
  }

  public getWeapons(callback: (weapons: IWeapon[]) => void): void {
    this.weaponsApiService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: IWeaponViewResponse): void => {
        const weapons: IWeapon[] = response.weapons.map((weapon: IWeapon) =>
          this.convertTableData(weapon),
        );
        callback(weapons);
      });
  }

  public deleteWeapon(id: string, callback: () => void): void {
    this.weaponsApiService
      .delete(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        callback();
      });
  }
}
