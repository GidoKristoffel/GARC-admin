import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  EliteBossesDetailsComponent
} from "../../../../../modules/elite-bosses/components/elite-bosses-details/elite-bosses-details.component";

@Component({
  selector: 'clt-elite-bosses-details-page',
  standalone: true,
  imports: [CommonModule, EliteBossesDetailsComponent],
  templateUrl: './elite-bosses-details-page.component.html',
  styleUrl: './elite-bosses-details-page.component.scss'
})
export class EliteBossesDetailsPageComponent {

}
