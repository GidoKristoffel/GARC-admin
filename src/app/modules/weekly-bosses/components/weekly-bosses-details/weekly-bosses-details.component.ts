import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDetails } from "../../../../core/classes/shared-details/shared-details";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { LanguageService } from "../../../../core/services/language/language.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { IWeeklyBoss } from "../../interfaces/common.inteface";
import { WeeklyBossesMetadataService } from "../../services/weekly-bosses-metadata/weekly-bosses-metadata.service";
import { WeeklyBossesApiService } from "../../api/weekly-bosses.api.service";
import { IWeeklyBossDetailsResponse } from "../../interfaces/api.interfaces";
import { DefaultBtnComponent } from "../../../../shared/components/button/default-btn/default-btn.component";
import { ScrollClassDirective } from "../../../../shared/directives/scroll-class/scroll-class.directive";
import { TextFieldViewComponent } from "../../../../shared/components/view/text-field-view/text-field-view.component";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'clt-weekly-bosses-details',
  standalone: true,
  imports: [CommonModule, DefaultBtnComponent, ScrollClassDirective, TextFieldViewComponent, TranslateModule, RouterLink],
  templateUrl: './weekly-bosses-details.component.html',
  styleUrl: './weekly-bosses-details.component.scss'
})
export class WeeklyBossesDetailsComponent
  extends SharedDetails
  implements OnInit
{
  public weeklyBoss!: IWeeklyBoss;

  constructor(
    private weeklyBossesMetadataService: WeeklyBossesMetadataService,
    private weeklyBossesApiService: WeeklyBossesApiService,
    protected override route: ActivatedRoute,
    protected override destroyRef: DestroyRef,
    protected override languageService: LanguageService,
  ) {
    super(route, destroyRef, languageService);
  }

  ngOnInit(): void {
    this.initLanguage();
    this.initRoute();
    this.initMetadata(this.weeklyBossesMetadataService.getDetails());
  }

  protected initTableData(id: string): void {
    this.weeklyBossesApiService
      .getById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(
        (response: IWeeklyBossDetailsResponse): IWeeklyBoss =>
          (this.weeklyBoss = response.weeklyBoss),
      );
  }
}
