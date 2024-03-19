import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCreate } from "../../../../core/classes/shared-create/shared-create";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FormCacheService } from "../../../../core/services/form-cache/form-cache.service";
import { ActivatedRoute } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { IArtifactLevelingCategoryFormBuilder } from "../../interfaces/form.interface";
import {
  ArtifactLevelingCategoryMetadataService
} from "../../services/artifact-leveling-category-metadata/artifact-leveling-category-metadata.service";
import {
  ArtifactLevelingCategoryFormService
} from "../../services/artifact-leveling-category-form/artifact-leveling-category-form.service";
import {
  ArtifactLevelingCategoryService
} from "../../services/artifact-leveling-category/artifact-leveling-category.service";

@Component({
  selector: 'clt-artifact-leveling-category-create',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artifact-leveling-category-create.component.html',
  styleUrl: './artifact-leveling-category-create.component.scss'
})
export class ArtifactLevelingCategoryCreateComponent
  extends SharedCreate<FormGroup<IArtifactLevelingCategoryFormBuilder>>
  implements OnInit
{

  constructor(
    protected override formBuilder: FormBuilder,
    private artifactLevelingCategoryMetadataService: ArtifactLevelingCategoryMetadataService,
    private artifactLevelingCategoryFormService: ArtifactLevelingCategoryFormService,
    private destroyRef: DestroyRef,
    private formCacheService: FormCacheService,
    private artifactLevelingCategoryService: ArtifactLevelingCategoryService,
    private route: ActivatedRoute,
  ) {
    super(formBuilder);
  }

  ngOnInit(): void {
    this.initForm();
    this.initCashing();
    this.loadCachedData();
    this.initMetadata(this.artifactLevelingCategoryMetadataService.getCreate());
  }

  private initForm(): void {
    this.form = this.artifactLevelingCategoryFormService.getForm();
  }

  protected initCashing(): void {
    this.form.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data): void => {
        this.formCacheService.saveFormData(data);
      });
  }

  protected loadCachedData(): void {
    const cachedData = this.formCacheService.loadFormData();
    if (cachedData) {
      this.form.patchValue(cachedData);
    }
  }

  public save(): void {
    this.artifactLevelingCategoryService.createArtifactLevelingCategory(this.form, this.viewLink, this.route);
  }
}

