import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedView } from '../../../../core/classes/shared-view/shared-view';
import { IMob } from '../../interfaces/common.inteface';
import { LanguageService } from '../../../../core/services/language/language.service';
import { MobsMetadataService } from '../../services/mobs-metadata/mobs-metadata.service';
import { MobsViewTableService } from '../../services/mobs-view-table/mobs-view-table.service';
import { DefaultBtnComponent } from '../../../../shared/components/button/default-btn/default-btn.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ViewTableComponent } from '../../../../shared/components/table/view-table/view-table.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'clt-mobs-view',
  standalone: true,
  imports: [
    CommonModule,
    DefaultBtnComponent,
    FormsModule,
    TranslateModule,
    ViewTableComponent,
    RouterLink,
  ],
  templateUrl: './mobs-view.component.html',
  styleUrl: './mobs-view.component.scss',
})
export class MobsViewComponent extends SharedView implements OnInit {
  public tableData: IMob[] = [];

  constructor(
    private mobsMetadataService: MobsMetadataService,
    private mobsViewTableService: MobsViewTableService,
    protected override destroyRef: DestroyRef,
    protected override languageService: LanguageService,
  ) {
    super(destroyRef, languageService);
  }

  ngOnInit(): void {
    this.initLanguage();
    this.initMetadata(this.mobsMetadataService.getView());
    this.initTableData();
  }

  private initTableData(): void {
    this.mobsViewTableService.getMobs((mobs: IMob[]): void => {
      this.tableData = mobs;
    });
  }

  public delete(id: string): void {
    this.mobsViewTableService.deleteMob(id, () => this.initTableData());
  }
}
