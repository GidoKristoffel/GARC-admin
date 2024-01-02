import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WeaponMaterialsDetailsComponent
} from "../../../../../modules/weapon-materials/components/weapon-materials-details/weapon-materials-details.component";

@Component({
  selector: 'clt-weapon-materials-details-page',
  standalone: true,
  imports: [CommonModule, WeaponMaterialsDetailsComponent],
  templateUrl: './weapon-materials-details-page.component.html',
  styleUrl: './weapon-materials-details-page.component.scss'
})
export class WeaponMaterialsDetailsPageComponent {

}
