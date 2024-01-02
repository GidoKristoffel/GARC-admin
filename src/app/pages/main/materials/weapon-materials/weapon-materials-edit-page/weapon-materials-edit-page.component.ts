import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WeaponMaterialsEditComponent
} from "../../../../../modules/weapon-materials/components/weapon-materials-edit/weapon-materials-edit.component";

@Component({
  selector: 'clt-weapon-materials-edit-page',
  standalone: true,
  imports: [CommonModule, WeaponMaterialsEditComponent],
  templateUrl: './weapon-materials-edit-page.component.html',
  styleUrl: './weapon-materials-edit-page.component.scss'
})
export class WeaponMaterialsEditPageComponent {

}
