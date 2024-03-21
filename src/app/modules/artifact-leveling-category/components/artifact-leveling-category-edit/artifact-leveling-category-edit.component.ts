import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedEdit } from '../../../../core/classes/shared-edit/shared-edit';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../../../../core/services/language/language.service';
import { IArtifactLevelingCategoryFormBuilder } from '../../interfaces/form.interface';
import { ArtifactLevelingCategoryMetadataService } from '../../services/artifact-leveling-category-metadata/artifact-leveling-category-metadata.service';
import { ArtifactLevelingCategoryFormService } from '../../services/artifact-leveling-category-form/artifact-leveling-category-form.service';
import { ArtifactLevelingCategoryService } from '../../services/artifact-leveling-category/artifact-leveling-category.service';
import { IArtifactLevelingCategory } from '../../interfaces/common.inteface';
import {
  TableEditFacadeComponent
} from "../../../../shared/components/facade/table-edit-facade/table-edit-facade.component";

@Component({
  selector: 'clt-artifact-leveling-category-edit',
  standalone: true,
  imports: [CommonModule, TableEditFacadeComponent],
  templateUrl: './artifact-leveling-category-edit.component.html',
  styleUrl: './artifact-leveling-category-edit.component.scss',
})
export class ArtifactLevelingCategoryEditComponent
  extends SharedEdit<FormGroup<IArtifactLevelingCategoryFormBuilder>>
  implements OnInit
{
  constructor(
    private artifactLevelingCategoryMetadataService: ArtifactLevelingCategoryMetadataService,
    private artifactLevelingCategoryFormService: ArtifactLevelingCategoryFormService,
    private artifactLevelingCategoryService: ArtifactLevelingCategoryService,
    protected override route: ActivatedRoute,
    protected override destroyRef: DestroyRef,
    protected override languageService: LanguageService,
  ) {
    super(route, destroyRef, languageService);
  }

  ngOnInit(): void {
    this.initLanguage();
    this.initRoute();
    this.initForm();
    this.initMetadata(this.artifactLevelingCategoryMetadataService.getEdit());
  }

  protected initForm(): void {
    this.form = this.artifactLevelingCategoryFormService.getForm();
    if (this.id) {
      this.getCharacterById(this.id);
    }
  }

  private getCharacterById(id: string): void {
    this.artifactLevelingCategoryService.getArtifactLevelingCategoryById(
      id,
      (artifactLevelingCategory: IArtifactLevelingCategory): void => {
        this.form.patchValue(
          this.artifactLevelingCategoryFormService.convertToForm(
            artifactLevelingCategory,
          ),
        );
        this.loaded = true;
      },
    );
  }

  protected save(): void {
    if (this.form && this.id) {
      this.artifactLevelingCategoryService.updateArtifactLevelingCategory(
        this.id,
        this.form,
        this.detailsLink,
        this.route,
      );
    }
  }
}
