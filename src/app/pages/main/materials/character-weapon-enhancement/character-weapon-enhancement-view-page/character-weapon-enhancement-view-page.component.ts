import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WeaponMaterialsViewTableComponent
} from "../../../../../modules/weapon-materials/components/weapon-materials-view-table/weapon-materials-view-table.component";

@Component({
  selector: 'clt-character-weapon-enhancement-view-page',
  standalone: true,
  imports: [CommonModule, WeaponMaterialsViewTableComponent],
  templateUrl: './character-weapon-enhancement-view-page.component.html',
  styleUrl: './character-weapon-enhancement-view-page.component.scss'
})
export class CharacterWeaponEnhancementViewPageComponent {

}
