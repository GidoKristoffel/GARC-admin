import { DestroyRef, Injectable } from '@angular/core';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { LevelUpMaterialsApiService } from "../../api/level-up-materials.api.service";
import { ILevelUpMaterial } from "../../interfaces/common.inteface";
import { ILevelUpMaterialViewResponse } from "../../interfaces/api.interfaces";

@Injectable({
  providedIn: 'root'
})
export class LevelUpMaterialsViewTableService {
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
