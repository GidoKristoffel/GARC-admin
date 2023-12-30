import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LevelUpMaterialsDetailsComponent
} from "../../../../../modules/level-up-materials/components/level-up-materials-details/level-up-materials-details.component";

@Component({
  selector: 'clt-character-level-up-details-page',
  standalone: true,
  imports: [CommonModule, LevelUpMaterialsDetailsComponent],
  templateUrl: './character-level-up-details-page.component.html',
  styleUrl: './character-level-up-details-page.component.scss'
})
export class CharacterLevelUpDetailsPageComponent {

}
