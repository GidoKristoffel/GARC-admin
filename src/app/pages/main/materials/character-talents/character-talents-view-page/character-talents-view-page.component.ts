import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TalentMaterialsViewTableComponent
} from "../../../../../modules/talent-materials/components/talent-materials-view-table/talent-materials-view-table.component";

@Component({
  selector: 'clt-character-talents-view-page',
  standalone: true,
  imports: [CommonModule, TalentMaterialsViewTableComponent],
  templateUrl: './character-talents-view-page.component.html',
  styleUrl: './character-talents-view-page.component.scss'
})
export class CharacterTalentsViewPageComponent {

}
