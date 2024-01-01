import { DestroyRef, Injectable } from '@angular/core';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { IWeaponMaterial } from "../../interfaces/common.inteface";
import { WeaponMaterialsApiService } from "../../api/weapon-materials.api.service";
import { IWeaponMaterialViewResponse } from "../../interfaces/api.interfaces";

@Injectable({
  providedIn: 'root'
})
export class WeaponMaterialsViewTableService {
  constructor(
    private destroyRef: DestroyRef,
    private weaponMaterialsApiService: WeaponMaterialsApiService,
  ) {}

  public convertTableData(data: IWeaponMaterial): IWeaponMaterial {
    return data;
  }

  public getWeaponMaterials(
    callback: (weaponMaterials: IWeaponMaterial[]) => void,
  ): void {
    this.weaponMaterialsApiService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: IWeaponMaterialViewResponse): void => {
        const weaponMaterials: IWeaponMaterial[] = response.weaponMaterials.map(
          (weaponMaterial: IWeaponMaterial) => this.convertTableData(weaponMaterial),
        );
        callback(weaponMaterials);
      });
  }

  public deleteWeaponMaterial(id: string, callback: () => void): void {
    this.weaponMaterialsApiService
      .delete(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        callback();
      });
  }
}
