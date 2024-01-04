import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDetails } from "../../../../core/classes/shared-details/shared-details";
import { ActivatedRoute } from "@angular/router";
import { LanguageService } from "../../../../core/services/language/language.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { IEnhancementMaterial } from "../../interfaces/common.inteface";
import {
  EnhancementMaterialsMetadataService
} from "../../services/enhancement-materials-metadata/enhancement-materials-metadata.service";
import { EnhancementMaterialsApiService } from "../../api/enhancement-materials.api.service";
import { IEnhancementMaterialDetailsResponse } from "../../interfaces/api.interfaces";
import {
  TableDetailsFacadeComponent
} from "../../../../shared/components/facade/table-details-facade/table-details-facade.component";

@Component({
  selector: 'clt-enhancement-materials-details',
  standalone: true,
  imports: [CommonModule, TableDetailsFacadeComponent],
  templateUrl: './enhancement-materials-details.component.html',
  styleUrl: './enhancement-materials-details.component.scss'
})
export class EnhancementMaterialsDetailsComponent
  extends SharedDetails
  implements OnInit
{
  public details!: IEnhancementMaterial;

  constructor(
    private enhancementMaterialsMetadataService: EnhancementMaterialsMetadataService,
    private enhancementMaterialsApiService: EnhancementMaterialsApiService,
    protected override route: ActivatedRoute,
    protected override destroyRef: DestroyRef,
    protected override languageService: LanguageService,
  ) {
    super(route, destroyRef, languageService);
  }

  ngOnInit(): void {
    this.initLanguage();
    this.initRoute();
    this.initMetadata(this.enhancementMaterialsMetadataService.getDetails());
  }

  protected initTableData(id: string): void {
    this.enhancementMaterialsApiService
      .getById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(
        (response: IEnhancementMaterialDetailsResponse): IEnhancementMaterial =>
          (this.details = response.enhancementMaterial),
      );
  }
}
