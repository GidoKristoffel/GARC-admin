import { DestroyRef, Injectable } from '@angular/core';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { EnhancementMaterialsApiService } from "../../api/enhancement-materials.api.service";
import { IEnhancementMaterial } from "../../interfaces/common.inteface";
import { IEnhancementMaterialViewResponse } from "../../interfaces/api.interfaces";

@Injectable({
  providedIn: 'root'
})
export class EnhancementMaterialsViewTableService {
  constructor(
    private destroyRef: DestroyRef,
    private EnhancementMaterialsApiService: EnhancementMaterialsApiService,
  ) {}

  public convertTableData(data: IEnhancementMaterial): IEnhancementMaterial {
    return data;
  }

  public getEnhancementMaterials(
    callback: (EnhancementMaterials: IEnhancementMaterial[]) => void,
  ): void {
    this.EnhancementMaterialsApiService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: IEnhancementMaterialViewResponse): void => {
        const EnhancementMaterials: IEnhancementMaterial[] = response.enhancementMaterials.map(
          (EnhancementMaterial: IEnhancementMaterial) => this.convertTableData(EnhancementMaterial),
        );
        callback(EnhancementMaterials);
      });
  }

  public deleteEnhancementMaterial(id: string, callback: () => void): void {
    this.EnhancementMaterialsApiService
      .delete(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        callback();
      });
  }
}
