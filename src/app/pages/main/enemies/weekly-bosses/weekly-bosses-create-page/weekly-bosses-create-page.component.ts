import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WeeklyBossesCreateComponent
} from "../../../../../modules/weekly-bosses/components/weekly-bosses-create/weekly-bosses-create.component";

@Component({
  selector: 'clt-weekly-bosses-create-page',
  standalone: true,
  imports: [CommonModule, WeeklyBossesCreateComponent],
  templateUrl: './weekly-bosses-create-page.component.html',
  styleUrl: './weekly-bosses-create-page.component.scss'
})
export class WeeklyBossesCreatePageComponent {

}
