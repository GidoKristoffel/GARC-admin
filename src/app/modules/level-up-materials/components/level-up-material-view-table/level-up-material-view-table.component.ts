import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedView } from "../../../../core/classes/shared-view/shared-view";
import { LanguageService } from "../../../../core/services/language/language.service";
import { ILevelUpMaterial } from "../../interfaces/common.inteface";
import {
  LevelUpMaterialsMetadataService
} from "../../services/level-up-materials-metadata/level-up-materials-metadata.service";
import {
  LevelUpMaterialsViewTableService
} from "../../services/level-up-materials-view-table/level-up-materials-view-table.service";
import {
  TableViewFacadeComponent
} from "../../../../shared/components/facade/table-view-facade/table-view-facade.component";

@Component({
  selector: 'clt-level-up-material-view-table',
  standalone: true,
  imports: [CommonModule, TableViewFacadeComponent],
  templateUrl: './level-up-material-view-table.component.html',
  styleUrl: './level-up-material-view-table.component.scss'
})
export class LevelUpMaterialViewTableComponent
  extends SharedView
  implements OnInit
{
  public tableData: ILevelUpMaterial[] = [];

  constructor(
    private levelUpMaterialsMetadataService: LevelUpMaterialsMetadataService,
    private levelUpMaterialsViewTableService: LevelUpMaterialsViewTableService,
    protected override destroyRef: DestroyRef,
    protected override languageService: LanguageService,
  ) {
    super(destroyRef, languageService);
  }

  ngOnInit(): void {
    this.initLanguage();
    this.initMetadata(this.levelUpMaterialsMetadataService.getView());
    this.initTableData();
  }

  private initTableData(): void {
    this.levelUpMaterialsViewTableService.getLevelUpMaterials(
      (levelUpMaterials: ILevelUpMaterial[]): void => {
        this.tableData = levelUpMaterials;
      },
    );
  }

  public delete(id: string): void {
    this.levelUpMaterialsViewTableService.deleteLevelUpMaterial(id, () =>
      this.initTableData(),
    );
  }
}
