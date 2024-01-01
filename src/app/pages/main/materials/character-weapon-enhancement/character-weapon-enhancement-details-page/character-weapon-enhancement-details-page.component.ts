import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WeaponMaterialsDetailsComponent
} from "../../../../../modules/weapon-materials/components/weapon-materials-details/weapon-materials-details.component";

@Component({
  selector: 'clt-character-weapon-enhancement-details-page',
  standalone: true,
  imports: [CommonModule, WeaponMaterialsDetailsComponent],
  templateUrl: './character-weapon-enhancement-details-page.component.html',
  styleUrl: './character-weapon-enhancement-details-page.component.scss'
})
export class CharacterWeaponEnhancementDetailsPageComponent {

}
