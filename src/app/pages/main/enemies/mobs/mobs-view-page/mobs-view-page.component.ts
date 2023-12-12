import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobsViewComponent } from "../../../../../modules/mobs/components/mobs-view/mobs-view.component";

@Component({
  selector: 'clt-mobs-view-page',
  standalone: true,
  imports: [CommonModule, MobsViewComponent],
  templateUrl: './mobs-view-page.component.html',
  styleUrl: './mobs-view-page.component.scss'
})
export class MobsViewPageComponent {

}
