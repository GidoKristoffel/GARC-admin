import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  EliteBossesEditComponent
} from "../../../../../modules/elite-bosses/components/elite-bosses-edit/elite-bosses-edit.component";

@Component({
  selector: 'clt-elite-bosses-edit-page',
  standalone: true,
  imports: [CommonModule, EliteBossesEditComponent],
  templateUrl: './elite-bosses-edit-page.component.html',
  styleUrl: './elite-bosses-edit-page.component.scss'
})
export class EliteBossesEditPageComponent {

}
