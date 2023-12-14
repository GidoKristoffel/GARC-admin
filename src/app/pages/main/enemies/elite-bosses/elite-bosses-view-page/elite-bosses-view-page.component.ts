import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  EliteBossesViewComponent
} from "../../../../../modules/elite-bosses/components/elite-bosses-view/elite-bosses-view.component";

@Component({
  selector: 'clt-elite-bosses-view-page',
  standalone: true,
  imports: [CommonModule, EliteBossesViewComponent],
  templateUrl: './elite-bosses-view-page.component.html',
  styleUrl: './elite-bosses-view-page.component.scss'
})
export class EliteBossesViewPageComponent {

}
