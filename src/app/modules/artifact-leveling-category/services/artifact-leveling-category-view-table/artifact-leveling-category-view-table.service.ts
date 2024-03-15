import { DestroyRef, Injectable } from '@angular/core';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ArtifactLevelingCategoryApi } from "../../api/artifact-leveling-category.api";
import { IArtifactLevelingCategory } from "../../interfaces/common.inteface";
import { IArtifactLevelingCategoryViewResponse } from "../../interfaces/api.interface";

@Injectable({
  providedIn: 'root'
})
export class ArtifactLevelingCategoryViewTableService {
  constructor(
    private destroyRef: DestroyRef,
    private artifactLevelingCategoriesApiService: ArtifactLevelingCategoryApi,
  ) {}

  public convertTableData(data: IArtifactLevelingCategory): IArtifactLevelingCategory {
    return data;
  }

  public getArtifactLevelingCategories(
    callback: (artifactLevelingCategories: IArtifactLevelingCategory[]) => void,
  ): void {
    this.artifactLevelingCategoriesApiService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: IArtifactLevelingCategoryViewResponse): void => {
        const artifactLevelingCategories: IArtifactLevelingCategory[] = response.artifactLevelingCategories.map(
          (artifactLevelingCategory: IArtifactLevelingCategory) => this.convertTableData(artifactLevelingCategory),
        );
        callback(artifactLevelingCategories);
      });
  }

  public deleteArtifactLevelingCategory(id: string, callback: () => void): void {
    this.artifactLevelingCategoriesApiService
      .delete(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        callback();
      });
  }
}
