import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedView } from '../../../../core/classes/shared-view/shared-view';
import { IEliteBoss } from '../../interfaces/common.inteface';
import { LanguageService } from '../../../../core/services/language/language.service';
import { EliteBossesMetadataService } from '../../services/elite-bosses-metadata/elite-bosses-metadata.service';
import { EliteBossesViewTableService } from '../../services/elite-bosses-view-table/elite-bosses-view-table.service';
import { DefaultBtnComponent } from "../../../../shared/components/button/default-btn/default-btn.component";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { ViewTableComponent } from "../../../../shared/components/table/view-table/view-table.component";
import { RouterLink } from "@angular/router";
import {
  TableViewFacadeComponent
} from "../../../../shared/components/facade/table-view-facade/table-view-facade.component";

@Component({
  selector: 'clt-elite-bosses-view',
  standalone: true,
  imports: [CommonModule, DefaultBtnComponent, FormsModule, TranslateModule, ViewTableComponent, RouterLink, TableViewFacadeComponent],
  templateUrl: './elite-bosses-view.component.html',
  styleUrl: './elite-bosses-view.component.scss',
})
export class EliteBossesViewComponent extends SharedView implements OnInit {
  public tableData: IEliteBoss[] = [];

  constructor(
    private eliteBossesMetadataService: EliteBossesMetadataService,
    private eliteBossesViewTableService: EliteBossesViewTableService,
    protected override destroyRef: DestroyRef,
    protected override languageService: LanguageService,
  ) {
    super(destroyRef, languageService);
  }

  ngOnInit(): void {
    this.initLanguage();
    this.initMetadata(this.eliteBossesMetadataService.getView());
    this.initTableData();
  }

  private initTableData(): void {
    this.eliteBossesViewTableService.getEliteBosses(
      (eliteBosses: IEliteBoss[]): void => {
        this.tableData = eliteBosses;
      },
    );
  }

  public delete(id: string): void {
    this.eliteBossesViewTableService.deleteEliteBoss(id, () =>
      this.initTableData(),
    );
  }
}
