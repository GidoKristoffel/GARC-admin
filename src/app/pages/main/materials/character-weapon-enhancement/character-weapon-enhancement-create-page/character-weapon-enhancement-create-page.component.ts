import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WeaponMaterialsCreateComponent
} from "../../../../../modules/weapon-materials/components/weapon-materials-create/weapon-materials-create.component";

@Component({
  selector: 'clt-character-weapon-enhancement-create-page',
  standalone: true,
  imports: [CommonModule, WeaponMaterialsCreateComponent],
  templateUrl: './character-weapon-enhancement-create-page.component.html',
  styleUrl: './character-weapon-enhancement-create-page.component.scss'
})
export class CharacterWeaponEnhancementCreatePageComponent {

}
