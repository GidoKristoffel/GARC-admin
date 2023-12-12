import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobsDetailsComponent } from "../../../../../modules/mobs/components/mobs-details/mobs-details.component";

@Component({
  selector: 'clt-mobs-details-page',
  standalone: true,
  imports: [CommonModule, MobsDetailsComponent],
  templateUrl: './mobs-details-page.component.html',
  styleUrl: './mobs-details-page.component.scss'
})
export class MobsDetailsPageComponent {

}
