import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDetails } from "../../../../core/classes/shared-details/shared-details";
import { ActivatedRoute } from "@angular/router";
import { LanguageService } from "../../../../core/services/language/language.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { IWeaponMaterial } from "../../interfaces/common.inteface";
import {
  WeaponMaterialsMetadataService
} from "../../services/weapon-materials-metadata/weapon-materials-metadata.service";
import { WeaponMaterialsApiService } from "../../api/weapon-materials.api.service";
import { IWeaponMaterialDetailsResponse } from "../../interfaces/api.interfaces";
import {
  TableDetailsFacadeComponent
} from "../../../../shared/components/facade/table-details-facade/table-details-facade.component";

@Component({
  selector: 'clt-weapon-materials-details',
  standalone: true,
  imports: [CommonModule, TableDetailsFacadeComponent],
  templateUrl: './weapon-materials-details.component.html',
  styleUrl: './weapon-materials-details.component.scss'
})
export class WeaponMaterialsDetailsComponent
  extends SharedDetails
  implements OnInit
{
  public weaponMaterial!: IWeaponMaterial;

  constructor(
    private weaponMaterialsMetadataService: WeaponMaterialsMetadataService,
    private weaponMaterialsApiService: WeaponMaterialsApiService,
    protected override route: ActivatedRoute,
    protected override destroyRef: DestroyRef,
    protected override languageService: LanguageService,
  ) {
    super(route, destroyRef, languageService);
  }

  ngOnInit(): void {
    this.initLanguage();
    this.initRoute();
    this.initMetadata(this.weaponMaterialsMetadataService.getDetails());
  }

  protected initTableData(id: string): void {
    this.weaponMaterialsApiService
      .getById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(
        (response: IWeaponMaterialDetailsResponse): IWeaponMaterial =>
          (this.weaponMaterial = response.weaponMaterial),
      );
  }
}
