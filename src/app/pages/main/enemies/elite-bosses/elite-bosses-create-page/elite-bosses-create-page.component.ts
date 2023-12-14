import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  EliteBossesCreateComponent
} from "../../../../../modules/elite-bosses/components/elite-bosses-create/elite-bosses-create.component";

@Component({
  selector: 'clt-elite-bosses-create-page',
  standalone: true,
  imports: [CommonModule, EliteBossesCreateComponent],
  templateUrl: './elite-bosses-create-page.component.html',
  styleUrl: './elite-bosses-create-page.component.scss'
})
export class EliteBossesCreatePageComponent {

}
