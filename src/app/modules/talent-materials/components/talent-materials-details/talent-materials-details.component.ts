import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDetails } from '../../../../core/classes/shared-details/shared-details';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LanguageService } from '../../../../core/services/language/language.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ITalentMaterial } from '../../interfaces/common.inteface';
import { TalentMaterialsMetadataService } from '../../services/talent-materials-metadata/talent-materials-metadata.service';
import { TalentMaterialsApiService } from '../../api/talent-materials.api.service';
import { ITalentMaterialDetailsResponse } from '../../interfaces/api.interfaces';
import { DefaultBtnComponent } from "../../../../shared/components/button/default-btn/default-btn.component";
import { FormatPipeModule } from "ngx-date-fns";
import { ScrollClassDirective } from "../../../../shared/directives/scroll-class/scroll-class.directive";
import { TextFieldViewComponent } from "../../../../shared/components/view/text-field-view/text-field-view.component";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'clt-talent-materials-details',
  standalone: true,
  imports: [CommonModule, DefaultBtnComponent, FormatPipeModule, ScrollClassDirective, TextFieldViewComponent, TranslateModule, RouterLink],
  templateUrl: './talent-materials-details.component.html',
  styleUrl: './talent-materials-details.component.scss',
})
export class TalentMaterialsDetailsComponent
  extends SharedDetails
  implements OnInit
{
  public talentMaterial!: ITalentMaterial;

  constructor(
    private talentMaterialsMetadataService: TalentMaterialsMetadataService,
    private talentMaterialsApiService: TalentMaterialsApiService,
    protected override route: ActivatedRoute,
    protected override destroyRef: DestroyRef,
    protected override languageService: LanguageService,
  ) {
    super(route, destroyRef, languageService);
  }

  ngOnInit(): void {
    this.initLanguage();
    this.initRoute();
    this.initMetadata(this.talentMaterialsMetadataService.getDetails());
  }

  protected initTableData(id: string): void {
    this.talentMaterialsApiService
      .getById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(
        (response: ITalentMaterialDetailsResponse): ITalentMaterial =>
          (this.talentMaterial = response.talentMaterial),
      );
  }
}
