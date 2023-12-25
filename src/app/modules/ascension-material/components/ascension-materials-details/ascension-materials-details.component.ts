import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDetails } from "../../../../core/classes/shared-details/shared-details";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { LanguageService } from "../../../../core/services/language/language.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { IAscensionMaterial } from "../../interfaces/common.inteface";
import {
  AscensionMaterialsMetadataService
} from "../../services/ascension-materials-metadata/ascension-materials-metadata.service";
import { AscensionMaterialsApiService } from "../../api/ascension-materials.api.service";
import { IAscensionMaterialDetailsResponse } from "../../interfaces/api.interfaces";
import { DefaultBtnComponent } from "../../../../shared/components/button/default-btn/default-btn.component";
import { ScrollClassDirective } from "../../../../shared/directives/scroll-class/scroll-class.directive";
import { TextFieldViewComponent } from "../../../../shared/components/view/text-field-view/text-field-view.component";
import { TranslateModule } from "@ngx-translate/core";
import {
  TableDetailsFacadeComponent
} from "../../../../shared/components/facade/table-details-facade/table-details-facade.component";

@Component({
  selector: 'clt-ascension-materials-details',
  standalone: true,
  imports: [CommonModule, DefaultBtnComponent, ScrollClassDirective, TextFieldViewComponent, TranslateModule, RouterLink, TableDetailsFacadeComponent],
  templateUrl: './ascension-materials-details.component.html',
  styleUrl: './ascension-materials-details.component.scss'
})
export class AscensionMaterialsDetailsComponent
  extends SharedDetails
  implements OnInit
{
  public ascensionMaterial!: IAscensionMaterial;

  constructor(
    private ascensionMaterialsMetadataService: AscensionMaterialsMetadataService,
    private ascensionMaterialsApiService: AscensionMaterialsApiService,
    protected override route: ActivatedRoute,
    protected override destroyRef: DestroyRef,
    protected override languageService: LanguageService,
  ) {
    super(route, destroyRef, languageService);
  }

  ngOnInit(): void {
    this.initLanguage();
    this.initRoute();
    this.initMetadata(this.ascensionMaterialsMetadataService.getDetails());
  }

  protected initTableData(id: string): void {
    this.ascensionMaterialsApiService
      .getById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(
        (response: IAscensionMaterialDetailsResponse): IAscensionMaterial =>
          (this.ascensionMaterial = response.ascensionMaterial),
      );
  }
}
