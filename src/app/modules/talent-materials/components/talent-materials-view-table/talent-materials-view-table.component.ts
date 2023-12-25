import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedView } from '../../../../core/classes/shared-view/shared-view';
import { LanguageService } from '../../../../core/services/language/language.service';
import { ITalentMaterial } from '../../interfaces/common.inteface';
import { TalentMaterialsMetadataService } from '../../services/talent-materials-metadata/talent-materials-metadata.service';
import { TalentMaterialsViewTableService } from '../../services/talent-materials-view-table/talent-materials-view-table.service';
import { DefaultBtnComponent } from '../../../../shared/components/button/default-btn/default-btn.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ViewTableComponent } from '../../../../shared/components/table/view-table/view-table.component';
import { RouterLink } from '@angular/router';
import { TableViewFacadeComponent } from '../../../../shared/components/facade/table-view-facade/table-view-facade.component';

@Component({
  selector: 'clt-talent-materials-view-table',
  standalone: true,
  imports: [
    CommonModule,
    DefaultBtnComponent,
    FormsModule,
    TranslateModule,
    ViewTableComponent,
    RouterLink,
    TableViewFacadeComponent,
  ],
  templateUrl: './talent-materials-view-table.component.html',
  styleUrl: './talent-materials-view-table.component.scss',
})
export class TalentMaterialsViewTableComponent
  extends SharedView
  implements OnInit
{
  public tableData: ITalentMaterial[] = [];

  constructor(
    private talentMaterialsMetadataService: TalentMaterialsMetadataService,
    private talentMaterialsViewTableService: TalentMaterialsViewTableService,
    protected override destroyRef: DestroyRef,
    protected override languageService: LanguageService,
  ) {
    super(destroyRef, languageService);
  }

  ngOnInit(): void {
    this.initLanguage();
    this.initMetadata(this.talentMaterialsMetadataService.getView());
    this.initTableData();
  }

  private initTableData(): void {
    this.talentMaterialsViewTableService.getTalentMaterials(
      (talentMaterials: ITalentMaterial[]): void => {
        this.tableData = talentMaterials;
      },
    );
  }

  public delete(id: string): void {
    this.talentMaterialsViewTableService.deleteTalentMaterial(id, () =>
      this.initTableData(),
    );
  }
}
