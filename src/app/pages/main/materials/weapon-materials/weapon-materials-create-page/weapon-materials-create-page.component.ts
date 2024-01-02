import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WeaponMaterialsCreateComponent
} from "../../../../../modules/weapon-materials/components/weapon-materials-create/weapon-materials-create.component";

@Component({
  selector: 'clt-weapon-materials-create-page',
  standalone: true,
  imports: [CommonModule, WeaponMaterialsCreateComponent],
  templateUrl: './weapon-materials-create-page.component.html',
  styleUrl: './weapon-materials-create-page.component.scss'
})
export class WeaponMaterialsCreatePageComponent {

}
