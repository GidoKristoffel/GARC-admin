import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WeaponMaterialsEditComponent
} from "../../../../../modules/weapon-materials/components/weapon-materials-edit/weapon-materials-edit.component";
import {
  EnhancementMaterialsEditComponent
} from "../../../../../modules/enhancement-materials/components/enhancement-materials-edit/enhancement-materials-edit.component";

@Component({
  selector: 'clt-character-weapon-enhancement-edit-page',
  standalone: true,
  imports: [CommonModule, WeaponMaterialsEditComponent, EnhancementMaterialsEditComponent],
  templateUrl: './character-weapon-enhancement-edit-page.component.html',
  styleUrl: './character-weapon-enhancement-edit-page.component.scss'
})
export class CharacterWeaponEnhancementEditPageComponent {

}
