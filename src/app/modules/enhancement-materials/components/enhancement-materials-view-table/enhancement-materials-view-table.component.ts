import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedView } from "../../../../core/classes/shared-view/shared-view";
import { LanguageService } from "../../../../core/services/language/language.service";
import { IEnhancementMaterial } from "../../interfaces/common.inteface";
import {
  EnhancementMaterialsMetadataService
} from "../../services/enhancement-materials-metadata/enhancement-materials-metadata.service";
import {
  EnhancementMaterialsViewTableService
} from "../../services/enhancement-materials-view-table/enhancement-materials-view-table.service";
import {
  TableViewFacadeComponent
} from "../../../../shared/components/facade/table-view-facade/table-view-facade.component";

@Component({
  selector: 'clt-enhancement-materials-view-table',
  standalone: true,
  imports: [CommonModule, TableViewFacadeComponent],
  templateUrl: './enhancement-materials-view-table.component.html',
  styleUrl: './enhancement-materials-view-table.component.scss'
})
export class EnhancementMaterialsViewTableComponent
  extends SharedView
  implements OnInit
{
  public tableData: IEnhancementMaterial[] = [];

  constructor(
    private enhancementMaterialsMetadataService: EnhancementMaterialsMetadataService,
    private enhancementMaterialsViewTableService: EnhancementMaterialsViewTableService,
    protected override destroyRef: DestroyRef,
    protected override languageService: LanguageService,
  ) {
    super(destroyRef, languageService);
  }

  ngOnInit(): void {
    this.initLanguage();
    this.initMetadata(this.enhancementMaterialsMetadataService.getView());
    this.initTableData();
  }

  private initTableData(): void {
    this.enhancementMaterialsViewTableService.getEnhancementMaterials(
      (enhancementMaterials: IEnhancementMaterial[]): void => {
        this.tableData = enhancementMaterials;
      },
    );
  }

  public delete(id: string): void {
    this.enhancementMaterialsViewTableService.deleteEnhancementMaterial(id, () =>
      this.initTableData(),
    );
  }
}
