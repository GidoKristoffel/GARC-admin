import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WeeklyBossesEditComponent
} from "../../../../../modules/weekly-bosses/components/weekly-bosses-edit/weekly-bosses-edit.component";

@Component({
  selector: 'clt-weekly-bosses-edit-page',
  standalone: true,
  imports: [CommonModule, WeeklyBossesEditComponent],
  templateUrl: './weekly-bosses-edit-page.component.html',
  styleUrl: './weekly-bosses-edit-page.component.scss'
})
export class WeeklyBossesEditPageComponent {

}
