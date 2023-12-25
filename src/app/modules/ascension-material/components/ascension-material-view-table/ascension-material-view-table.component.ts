import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedView } from '../../../../core/classes/shared-view/shared-view';
import { LanguageService } from '../../../../core/services/language/language.service';
import { IAscensionMaterial } from "../../interfaces/common.inteface";
import {
  AscensionMaterialsMetadataService
} from "../../services/ascension-materials-metadata/ascension-materials-metadata.service";
import {
  AscensionMaterialsViewTableService
} from "../../services/ascension-materials-view-table/ascension-materials-view-table.service";
import { DefaultBtnComponent } from "../../../../shared/components/button/default-btn/default-btn.component";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { ViewTableComponent } from "../../../../shared/components/table/view-table/view-table.component";
import { RouterLink } from "@angular/router";
import {
  TableViewFacadeComponent
} from "../../../../shared/components/facade/table-view-facade/table-view-facade.component";

@Component({
  selector: 'clt-ascension-material-view-table',
  standalone: true,
  imports: [CommonModule, DefaultBtnComponent, FormsModule, TranslateModule, ViewTableComponent, RouterLink, TableViewFacadeComponent],
  templateUrl: './ascension-material-view-table.component.html',
  styleUrl: './ascension-material-view-table.component.scss',
})
export class AscensionMaterialViewTableComponent
  extends SharedView
  implements OnInit
{
  public tableData: IAscensionMaterial[] = [];

  constructor(
    private ascensionMaterialsMetadataService: AscensionMaterialsMetadataService,
    private ascensionMaterialsViewTableService: AscensionMaterialsViewTableService,
    protected override destroyRef: DestroyRef,
    protected override languageService: LanguageService,
  ) {
    super(destroyRef, languageService);
  }

  ngOnInit(): void {
    this.initLanguage();
    this.initMetadata(this.ascensionMaterialsMetadataService.getView());
    this.initTableData();
  }

  private initTableData(): void {
    this.ascensionMaterialsViewTableService.getAscensionMaterials(
      (ascensionMaterials: IAscensionMaterial[]): void => {
        this.tableData = ascensionMaterials;
      },
    );
  }

  public delete(id: string): void {
    this.ascensionMaterialsViewTableService.deleteAscensionMaterial(id, () =>
      this.initTableData(),
    );
  }
}
