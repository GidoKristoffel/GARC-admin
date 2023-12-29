import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDetails } from "../../../../core/classes/shared-details/shared-details";
import { ActivatedRoute } from "@angular/router";
import { LanguageService } from "../../../../core/services/language/language.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ILevelUpMaterial } from "../../interfaces/common.inteface";
import {
  LevelUpMaterialsMetadataService
} from "../../services/level-up-materials-metadata/level-up-materials-metadata.service";
import { LevelUpMaterialsApiService } from "../../api/level-up-materials.api.service";
import { ILevelUpMaterialDetailsResponse } from "../../interfaces/api.interfaces";
import {
  TableDetailsFacadeComponent
} from "../../../../shared/components/facade/table-details-facade/table-details-facade.component";

@Component({
  selector: 'clt-level-up-materials-details',
  standalone: true,
  imports: [CommonModule, TableDetailsFacadeComponent],
  templateUrl: './level-up-materials-details.component.html',
  styleUrl: './level-up-materials-details.component.scss'
})
export class LevelUpMaterialsDetailsComponent
  extends SharedDetails
  implements OnInit
{
  public levelUpMaterial!: ILevelUpMaterial;

  constructor(
    private levelUpMaterialsMetadataService: LevelUpMaterialsMetadataService,
    private levelUpMaterialsApiService: LevelUpMaterialsApiService,
    protected override route: ActivatedRoute,
    protected override destroyRef: DestroyRef,
    protected override languageService: LanguageService,
  ) {
    super(route, destroyRef, languageService);
  }

  ngOnInit(): void {
    this.initLanguage();
    this.initRoute();
    this.initMetadata(this.levelUpMaterialsMetadataService.getDetails());
  }

  protected initTableData(id: string): void {
    this.levelUpMaterialsApiService
      .getById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(
        (response: ILevelUpMaterialDetailsResponse): ILevelUpMaterial =>
          (this.levelUpMaterial = response.levelUpMaterial),
      );
  }
}
