import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedView } from "../../../../core/classes/shared-view/shared-view";
import { LanguageService } from "../../../../core/services/language/language.service";
import { IWeapon } from "../../interfaces/common.inteface";
import { WeaponMetadataService } from "../../services/weapon-metadata/weapon-metadata.service";
import { WeaponViewTableService } from "../../services/weapon-view-table/weapon-view-table.service";
import {
  TableViewFacadeComponent
} from "../../../../shared/components/facade/table-view-facade/table-view-facade.component";

@Component({
  selector: 'clt-weapons-view-table',
  standalone: true,
  imports: [CommonModule, TableViewFacadeComponent],
  templateUrl: './weapons-view-table.component.html',
  styleUrl: './weapons-view-table.component.scss'
})
export class WeaponsViewTableComponent
  extends SharedView
  implements OnInit
{
  public tableData: IWeapon[] = [];

  constructor(
    private weaponsMetadataService: WeaponMetadataService,
    private weaponsViewTableService: WeaponViewTableService,
    protected override destroyRef: DestroyRef,
    protected override languageService: LanguageService,
  ) {
    super(destroyRef, languageService);
  }

  ngOnInit(): void {
    this.initLanguage();
    this.initMetadata(this.weaponsMetadataService.getView());
    this.initTableData();
  }

  private initTableData(): void {
    this.weaponsViewTableService.getWeapons(
      (weapons: IWeapon[]): void => {
        this.tableData = weapons;
      },
    );
  }

  public delete(id: string): void {
    this.weaponsViewTableService.deleteWeapon(id, () =>
      this.initTableData(),
    );
  }
}
