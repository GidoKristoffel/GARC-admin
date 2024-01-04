import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  EnhancementMaterialsDetailsComponent
} from "../../../../../modules/enhancement-materials/components/enhancement-materials-details/enhancement-materials-details.component";

@Component({
  selector: 'clt-character-weapon-enhancement-details-page',
  standalone: true,
  imports: [CommonModule, EnhancementMaterialsDetailsComponent],
  templateUrl: './character-weapon-enhancement-details-page.component.html',
  styleUrl: './character-weapon-enhancement-details-page.component.scss'
})
export class CharacterWeaponEnhancementDetailsPageComponent {

}
