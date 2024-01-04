import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  EnhancementMaterialsCreateComponent
} from "../../../../../modules/enhancement-materials/components/enhancement-materials-create/enhancement-materials-create.component";

@Component({
  selector: 'clt-character-weapon-enhancement-create-page',
  standalone: true,
  imports: [CommonModule, EnhancementMaterialsCreateComponent],
  templateUrl: './character-weapon-enhancement-create-page.component.html',
  styleUrl: './character-weapon-enhancement-create-page.component.scss'
})
export class CharacterWeaponEnhancementCreatePageComponent {}
