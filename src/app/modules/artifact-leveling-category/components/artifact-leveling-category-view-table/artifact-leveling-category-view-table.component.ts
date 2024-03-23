import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedView } from "../../../../core/classes/shared-view/shared-view";
import { LanguageService } from "../../../../core/services/language/language.service";
import {
  ArtifactLevelingCategoryMetadataService
} from "../../services/artifact-leveling-category-metadata/artifact-leveling-category-metadata.service";
import {
  ArtifactLevelingCategoryViewTableService
} from "../../services/artifact-leveling-category-view-table/artifact-leveling-category-view-table.service";
import { IArtifactLevelingCategory } from "../../interfaces/common.inteface";
import {
  TableViewFacadeComponent
} from "../../../../shared/components/facade/table-view-facade/table-view-facade.component";

@Component({
  selector: 'clt-artifact-leveling-category-view-table',
  standalone: true,
  imports: [CommonModule, TableViewFacadeComponent],
  templateUrl: './artifact-leveling-category-view-table.component.html',
  styleUrl: './artifact-leveling-category-view-table.component.scss'
})
export class ArtifactLevelingCategoryViewTableComponent
  extends SharedView
  implements OnInit
{
  public tableData: IArtifactLevelingCategory[] = [];

  constructor(
    private artifactLevelingCategoryMetadataService: ArtifactLevelingCategoryMetadataService,
    private artifactLevelingCategoryViewTableService: ArtifactLevelingCategoryViewTableService,
    protected override destroyRef: DestroyRef,
    protected override languageService: LanguageService,
  ) {
    super(destroyRef, languageService);
  }

  ngOnInit(): void {
    this.initLanguage();
    this.initMetadata(this.artifactLevelingCategoryMetadataService.getView());
    this.initTableData();
  }

  private initTableData(): void {
    this.artifactLevelingCategoryViewTableService.getArtifactLevelingCategories(
      (artifactLevelingCategories: IArtifactLevelingCategory[]): void => {
        this.tableData = artifactLevelingCategories;
      },
    );
  }

  public delete(id: string): void {
    this.artifactLevelingCategoryViewTableService.deleteArtifactLevelingCategory(id, () =>
      this.initTableData(),
    );
  }
}
