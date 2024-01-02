import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WeaponMaterialsViewTableComponent
} from "../../../../../modules/weapon-materials/components/weapon-materials-view-table/weapon-materials-view-table.component";

@Component({
  selector: 'clt-weapon-materials-view-page',
  standalone: true,
  imports: [CommonModule, WeaponMaterialsViewTableComponent],
  templateUrl: './weapon-materials-view-page.component.html',
  styleUrl: './weapon-materials-view-page.component.scss'
})
export class WeaponMaterialsViewPageComponent {

}
