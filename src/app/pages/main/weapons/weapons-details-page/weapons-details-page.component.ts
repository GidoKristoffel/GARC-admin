import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WeaponsDetailsComponent
} from "../../../../modules/weapons/components/weapons-details/weapons-details.component";

@Component({
  selector: 'clt-weapons-details-page',
  standalone: true,
  imports: [CommonModule, WeaponsDetailsComponent],
  templateUrl: './weapons-details-page.component.html',
  styleUrl: './weapons-details-page.component.scss'
})
export class WeaponsDetailsPageComponent {

}
