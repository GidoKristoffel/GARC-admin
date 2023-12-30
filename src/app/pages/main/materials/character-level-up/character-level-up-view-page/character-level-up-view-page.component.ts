import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LevelUpMaterialViewTableComponent
} from "../../../../../modules/level-up-materials/components/level-up-material-view-table/level-up-material-view-table.component";

@Component({
  selector: 'clt-character-level-up-view-page',
  standalone: true,
  imports: [CommonModule, LevelUpMaterialViewTableComponent],
  templateUrl: './character-level-up-view-page.component.html',
  styleUrl: './character-level-up-view-page.component.scss'
})
export class CharacterLevelUpViewPageComponent {

}
