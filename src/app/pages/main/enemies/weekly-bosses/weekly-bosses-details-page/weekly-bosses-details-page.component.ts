import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WeeklyBossesDetailsComponent
} from "../../../../../modules/weekly-bosses/components/weekly-bosses-details/weekly-bosses-details.component";

@Component({
  selector: 'clt-weekly-bosses-details-page',
  standalone: true,
  imports: [CommonModule, WeeklyBossesDetailsComponent],
  templateUrl: './weekly-bosses-details-page.component.html',
  styleUrl: './weekly-bosses-details-page.component.scss'
})
export class WeeklyBossesDetailsPageComponent {

}
