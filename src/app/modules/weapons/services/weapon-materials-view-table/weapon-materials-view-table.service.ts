import { DestroyRef, Injectable } from '@angular/core';
import { LevelUpMaterialsApiService } from "../../../level-up-materials/api/level-up-materials.api.service";
import { ILevelUpMaterial } from "../../../level-up-materials/interfaces/common.inteface";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ILevelUpMaterialViewResponse } from "../../../level-up-materials/interfaces/api.interfaces";

@Injectable({
  providedIn: 'root'
})
export class WeaponMaterialsViewTableService {
  constructor(
    private destroyRef: DestroyRef,
    private levelUpMaterialsApiService: LevelUpMaterialsApiService,
  ) {}

  public convertTableData(data: ILevelUpMaterial): ILevelUpMaterial {
    return data;
  }

  public getLevelUpMaterials(
    callback: (levelUpMaterials: ILevelUpMaterial[]) => void,
  ): void {
    this.levelUpMaterialsApiService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: ILevelUpMaterialViewResponse): void => {
        const levelUpMaterials: ILevelUpMaterial[] = response.levelUpMaterials.map(
          (levelUpMaterial: ILevelUpMaterial) => this.convertTableData(levelUpMaterial),
        );
        callback(levelUpMaterials);
      });
  }

  public deleteLevelUpMaterial(id: string, callback: () => void): void {
    this.levelUpMaterialsApiService
      .delete(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        callback();
      });
  }
}
