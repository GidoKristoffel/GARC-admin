import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponsEditComponent } from "../../../../modules/weapons/components/weapons-edit/weapons-edit.component";

@Component({
  selector: 'clt-weapons-edit-page',
  standalone: true,
  imports: [CommonModule, WeaponsEditComponent],
  templateUrl: './weapons-edit-page.component.html',
  styleUrl: './weapons-edit-page.component.scss'
})
export class WeaponsEditPageComponent {

}
