import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobsEditComponent } from "../../../../../modules/mobs/components/mobs-edit/mobs-edit.component";

@Component({
  selector: 'clt-mobs-edit-page',
  standalone: true,
  imports: [CommonModule, MobsEditComponent],
  templateUrl: './mobs-edit-page.component.html',
  styleUrl: './mobs-edit-page.component.scss'
})
export class MobsEditPageComponent {

}
