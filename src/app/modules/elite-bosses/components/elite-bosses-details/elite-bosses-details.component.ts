import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDetails } from '../../../../core/classes/shared-details/shared-details';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LanguageService } from '../../../../core/services/language/language.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IEliteBoss } from '../../interfaces/common.inteface';
import { EliteBossesMetadataService } from '../../services/elite-bosses-metadata/elite-bosses-metadata.service';
import { EliteBossesApiService } from '../../api/elite-bosses.api.service';
import { IEliteBossDetailsResponse } from '../../interfaces/api.interfaces';
import { DefaultBtnComponent } from "../../../../shared/components/button/default-btn/default-btn.component";
import { ScrollClassDirective } from "../../../../shared/directives/scroll-class/scroll-class.directive";
import { TextFieldViewComponent } from "../../../../shared/components/view/text-field-view/text-field-view.component";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'clt-elite-bosses-details',
  standalone: true,
  imports: [CommonModule, DefaultBtnComponent, ScrollClassDirective, TextFieldViewComponent, TranslateModule, RouterLink],
  templateUrl: './elite-bosses-details.component.html',
  styleUrl: './elite-bosses-details.component.scss',
})
export class EliteBossesDetailsComponent
  extends SharedDetails
  implements OnInit
{
  public eliteBoss!: IEliteBoss;

  constructor(
    private eliteBossesMetadataService: EliteBossesMetadataService,
    private eliteBossesApiService: EliteBossesApiService,
    protected override route: ActivatedRoute,
    protected override destroyRef: DestroyRef,
    protected override languageService: LanguageService,
  ) {
    super(route, destroyRef, languageService);
  }

  ngOnInit(): void {
    this.initLanguage();
    this.initRoute();
    this.initMetadata(this.eliteBossesMetadataService.getDetails());
  }

  protected initTableData(id: string): void {
    this.eliteBossesApiService
      .getById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(
        (response: IEliteBossDetailsResponse): IEliteBoss =>
          (this.eliteBoss = response.eliteBoss),
      );
  }
}
