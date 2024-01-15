import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WeaponsViewTableComponent
} from "../../../../modules/weapons/components/weapons-view-table/weapons-view-table.component";

@Component({
  selector: 'clt-weapons-view-table-page',
  standalone: true,
  imports: [CommonModule, WeaponsViewTableComponent],
  templateUrl: './weapons-view-table-page.component.html',
  styleUrl: './weapons-view-table-page.component.scss'
})
export class WeaponsViewTablePageComponent {

}
