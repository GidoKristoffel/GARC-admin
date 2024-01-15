import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponsCreateComponent } from "../../../../modules/weapons/components/weapons-create/weapons-create.component";

@Component({
  selector: 'clt-weapons-create-page',
  standalone: true,
  imports: [CommonModule, WeaponsCreateComponent],
  templateUrl: './weapons-create-page.component.html',
  styleUrl: './weapons-create-page.component.scss'
})
export class WeaponsCreatePageComponent {

}
