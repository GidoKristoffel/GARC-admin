import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobsCreateComponent } from "../../../../../modules/mobs/components/mobs-create/mobs-create.component";

@Component({
  selector: 'clt-mobs-create-page',
  standalone: true,
  imports: [CommonModule, MobsCreateComponent],
  templateUrl: './mobs-create-page.component.html',
  styleUrl: './mobs-create-page.component.scss'
})
export class MobsCreatePageComponent {

}
