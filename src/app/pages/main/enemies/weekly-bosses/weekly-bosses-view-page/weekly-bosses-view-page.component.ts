import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WeeklyBossesViewComponent
} from "../../../../../modules/weekly-bosses/components/weekly-bosses-view/weekly-bosses-view.component";

@Component({
  selector: 'clt-weekly-bosses-view-page',
  standalone: true,
  imports: [CommonModule, WeeklyBossesViewComponent],
  templateUrl: './weekly-bosses-view-page.component.html',
  styleUrl: './weekly-bosses-view-page.component.scss'
})
export class WeeklyBossesViewPageComponent {

}
