import { DestroyRef, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ArtifactLevelingCategoryApi } from "../../api/artifact-leveling-category.api";
import {
  ArtifactLevelingCategoryFormService
} from "../artifact-leveling-category-form/artifact-leveling-category-form.service";
import {
  IArtifactLevelingCategoryApiForm,
  IArtifactLevelingCategoryFormBuilder
} from "../../interfaces/form.interface";
import { IArtifactLevelingCategory } from "../../interfaces/common.inteface";
import { IArtifactLevelingCategoryDetailsResponse } from "../../interfaces/api.interface";

@Injectable({
  providedIn: 'root'
})
export class ArtifactLevelingCategoryService {
  constructor(
    private router: Router,
    private destroyRef: DestroyRef,
    private artifactLevelingCategoriesApiService: ArtifactLevelingCategoryApi,
    private artifactLevelingCategoriesFormService: ArtifactLevelingCategoryFormService,
  ) {}

  public createArtifactLevelingCategory(
    form: FormGroup<IArtifactLevelingCategoryFormBuilder>,
    viewLink: string,
    route: ActivatedRoute,
  ): void {
    if (form) {
      const submissionForm: IArtifactLevelingCategoryApiForm =
        this.artifactLevelingCategoriesFormService.convertToSend(form);

      this.artifactLevelingCategoriesApiService
        .create(submissionForm)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((): void => {
          this.router.navigate([viewLink], { relativeTo: route }).then();
        });
    }
  }

  public getArtifactLevelingCategoryById(
    id: string,
    callback: (artifactLevelingCategory: IArtifactLevelingCategory) => void,
  ): void {
    this.artifactLevelingCategoriesApiService
      .getById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: IArtifactLevelingCategoryDetailsResponse): void => {
        callback(response.artifactLevelingCategory);
      });
  }

  public updateArtifactLevelingCategory(
    id: string,
    form: FormGroup<IArtifactLevelingCategoryFormBuilder>,
    detailsLink: string,
    route: ActivatedRoute,
  ): void {
    const submissionForm: IArtifactLevelingCategoryApiForm =
      this.artifactLevelingCategoriesFormService.convertToSend(form);

    this.artifactLevelingCategoriesApiService
      .update(id, submissionForm)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        this.router.navigate([detailsLink], { relativeTo: route }).then();
      });
  }
}
