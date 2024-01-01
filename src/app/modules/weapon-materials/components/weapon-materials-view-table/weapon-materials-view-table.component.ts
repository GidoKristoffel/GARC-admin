import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedView } from "../../../../core/classes/shared-view/shared-view";
import { IWeaponMaterial } from "../../interfaces/common.inteface";
import {
  WeaponMaterialsMetadataService
} from "../../services/weapon-materials-metadata/weapon-materials-metadata.service";
import {
  WeaponMaterialsViewTableService
} from "../../services/weapon-materials-view-table/weapon-materials-view-table.service";
import { LanguageService } from "../../../../core/services/language/language.service";
import {
  TableViewFacadeComponent
} from "../../../../shared/components/facade/table-view-facade/table-view-facade.component";

@Component({
  selector: 'clt-weapon-materials-view-table',
  standalone: true,
  imports: [CommonModule, TableViewFacadeComponent],
  templateUrl: './weapon-materials-view-table.component.html',
  styleUrl: './weapon-materials-view-table.component.scss'
})
export class WeaponMaterialsViewTableComponent
  extends SharedView
  implements OnInit
{
  public tableData: IWeaponMaterial[] = [];

  constructor(
    private weaponMaterialsMetadataService: WeaponMaterialsMetadataService,
    private weaponMaterialsViewTableService: WeaponMaterialsViewTableService,
    protected override destroyRef: DestroyRef,
    protected override languageService: LanguageService,
  ) {
    super(destroyRef, languageService);
  }

  ngOnInit(): void {
    this.initLanguage();
    this.initMetadata(this.weaponMaterialsMetadataService.getView());
    this.initTableData();
  }

  private initTableData(): void {
    this.weaponMaterialsViewTableService.getWeaponMaterials(
      (weaponMaterials: IWeaponMaterial[]): void => {
        this.tableData = weaponMaterials;
      },
    );
  }

  public delete(id: string): void {
    this.weaponMaterialsViewTableService.deleteWeaponMaterial(id, () =>
      this.initTableData(),
    );
  }
}
