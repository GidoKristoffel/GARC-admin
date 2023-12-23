import { DestroyRef, Injectable } from '@angular/core';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { IAscensionMaterial } from "../../interfaces/common.inteface";
import { IAscensionMaterialViewResponse } from "../../interfaces/api.interfaces";
import { AscensionMaterialsApiService } from "../../api/ascension-materials.api.service";

@Injectable({
  providedIn: 'root'
})
export class AscensionMaterialsViewTableService {
  constructor(
    private destroyRef: DestroyRef,
    private ascensionMaterialsApiService: AscensionMaterialsApiService,
  ) {}

  public convertTableData(data: IAscensionMaterial): IAscensionMaterial {
    return data;
  }

  public getAscensionMaterials(
    callback: (ascensionMaterials: IAscensionMaterial[]) => void,
  ): void {
    this.ascensionMaterialsApiService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: IAscensionMaterialViewResponse): void => {
        const ascensionMaterials: IAscensionMaterial[] = response.ascensionMaterials.map(
          (ascensionMaterial: IAscensionMaterial) => this.convertTableData(ascensionMaterial),
        );
        callback(ascensionMaterials);
      });
  }

  public deleteAscensionMaterial(id: string, callback: () => void): void {
    this.ascensionMaterialsApiService
      .delete(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        callback();
      });
  }
}
