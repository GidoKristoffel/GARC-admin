import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDetails } from "../../../../core/classes/shared-details/shared-details";
import { ActivatedRoute } from "@angular/router";
import { LanguageService } from "../../../../core/services/language/language.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { IArtifactLevelingCategory } from "../../interfaces/common.inteface";
import {
  ArtifactLevelingCategoryMetadataService
} from "../../services/artifact-leveling-category-metadata/artifact-leveling-category-metadata.service";
import { ArtifactLevelingCategoryApi } from "../../api/artifact-leveling-category.api";
import { IArtifactLevelingCategoryDetailsResponse } from "../../interfaces/api.interface";

@Component({
  selector: 'clt-artifact-leveling-category-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artifact-leveling-category-details.component.html',
  styleUrl: './artifact-leveling-category-details.component.scss'
})
export class ArtifactLevelingCategoryDetailsComponent
  extends SharedDetails
  implements OnInit
{
  public artifactLevelingCategory!: IArtifactLevelingCategory;

  constructor(
    private artifactLevelingCategoryMetadataService: ArtifactLevelingCategoryMetadataService,
    private ArtifactLevelingCategoryApi: ArtifactLevelingCategoryApi,
    protected override route: ActivatedRoute,
    protected override destroyRef: DestroyRef,
    protected override languageService: LanguageService,
  ) {
    super(route, destroyRef, languageService);
  }

  ngOnInit(): void {
    this.initLanguage();
    this.initRoute();
    this.initMetadata(this.artifactLevelingCategoryMetadataService.getDetails());
  }

  protected initTableData(id: string): void {
    this.ArtifactLevelingCategoryApi
      .getById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(
        (response: IArtifactLevelingCategoryDetailsResponse) =>
          (this.artifactLevelingCategory = response.artifactLevelingCategory),
      );
  }
}

