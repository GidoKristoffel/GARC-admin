import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDetails } from "../../../../core/classes/shared-details/shared-details";
import { ActivatedRoute } from "@angular/router";
import { LanguageService } from "../../../../core/services/language/language.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { IWeapon } from "../../interfaces/common.inteface";
import { WeaponMetadataService } from "../../services/weapon-metadata/weapon-metadata.service";
import { WeaponsApiService } from "../../api/weapons.api.service";
import { IWeaponDetailsResponse } from "../../interfaces/api.interfaces";
import {
  TableDetailsFacadeComponent
} from "../../../../shared/components/facade/table-details-facade/table-details-facade.component";

@Component({
  selector: 'clt-weapons-details',
  standalone: true,
  imports: [CommonModule, TableDetailsFacadeComponent],
  templateUrl: './weapons-details.component.html',
  styleUrl: './weapons-details.component.scss'
})
export class WeaponsDetailsComponent
  extends SharedDetails
  implements OnInit
{
  public weapon!: IWeapon;

  constructor(
    private weaponsMetadataService: WeaponMetadataService,
    private weaponsApiService: WeaponsApiService,
    protected override route: ActivatedRoute,
    protected override destroyRef: DestroyRef,
    protected override languageService: LanguageService,
  ) {
    super(route, destroyRef, languageService);
  }

  ngOnInit(): void {
    this.initLanguage();
    this.initRoute();
    this.initMetadata(this.weaponsMetadataService.getDetails());
  }

  protected initTableData(id: string): void {
    this.weaponsApiService
      .getById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(
        (response: IWeaponDetailsResponse): IWeapon =>
          (this.weapon = response.weapon),
      );
  }
}
