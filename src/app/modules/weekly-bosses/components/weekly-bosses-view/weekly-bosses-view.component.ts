import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedView } from '../../../../core/classes/shared-view/shared-view';
import { LanguageService } from '../../../../core/services/language/language.service';
import { IWeeklyBoss } from '../../interfaces/common.inteface';
import { WeeklyBossesMetadataService } from '../../services/weekly-bosses-metadata/weekly-bosses-metadata.service';
import { WeeklyBossesViewTableService } from '../../services/weekly-bosses-view-table/weekly-bosses-view-table.service';
import { DefaultBtnComponent } from "../../../../shared/components/button/default-btn/default-btn.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { ViewTableComponent } from "../../../../shared/components/table/view-table/view-table.component";
import { RouterLink } from "@angular/router";
import {
  TableViewFacadeComponent
} from "../../../../shared/components/facade/table-view-facade/table-view-facade.component";

@Component({
  selector: 'clt-weekly-bosses-view',
  standalone: true,
  imports: [CommonModule, DefaultBtnComponent, FormsModule, ReactiveFormsModule, TranslateModule, ViewTableComponent, RouterLink, TableViewFacadeComponent],
  templateUrl: './weekly-bosses-view.component.html',
  styleUrl: './weekly-bosses-view.component.scss',
})
export class WeeklyBossesViewComponent extends SharedView implements OnInit {
  public tableData: IWeeklyBoss[] = [];

  constructor(
    private weeklyBossesMetadataService: WeeklyBossesMetadataService,
    private weeklyBossesViewTableService: WeeklyBossesViewTableService,
    protected override destroyRef: DestroyRef,
    protected override languageService: LanguageService,
  ) {
    super(destroyRef, languageService);
  }

  ngOnInit(): void {
    this.initLanguage();
    this.initMetadata(this.weeklyBossesMetadataService.getView());
    this.initTableData();
  }

  private initTableData(): void {
    this.weeklyBossesViewTableService.getWeeklyBosses(
      (weeklyBosses: IWeeklyBoss[]): void => {
        this.tableData = weeklyBosses;
      },
    );
  }

  public delete(id: string): void {
    this.weeklyBossesViewTableService.deleteWeeklyBoss(id, () =>
      this.initTableData(),
    );
  }
}
