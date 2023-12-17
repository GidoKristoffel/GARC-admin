import { DestroyRef, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TalentMaterialsApiService } from '../../api/talent-materials.api.service';
import { ITalentMaterial } from '../../interfaces/common.inteface';
import { ITalentMaterialViewResponse } from '../../interfaces/api.interfaces';

@Injectable({
  providedIn: 'root',
})
export class TalentMaterialsViewTableService {
  constructor(
    private destroyRef: DestroyRef,
    private talentMaterialsApiService: TalentMaterialsApiService,
  ) {}

  public convertTableData(data: ITalentMaterial): ITalentMaterial {
    return data;
  }

  public getTalentMaterials(
    callback: (talentMaterials: ITalentMaterial[]) => void,
  ): void {
    this.talentMaterialsApiService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: ITalentMaterialViewResponse): void => {
        const talentMaterials: ITalentMaterial[] = response.talentMaterials.map(
          (talentMaterial: ITalentMaterial) => this.convertTableData(talentMaterial),
        );
        callback(talentMaterials);
      });
  }

  public deleteTalentMaterial(id: string, callback: () => void): void {
    this.talentMaterialsApiService
      .delete(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        callback();
      });
  }
}
