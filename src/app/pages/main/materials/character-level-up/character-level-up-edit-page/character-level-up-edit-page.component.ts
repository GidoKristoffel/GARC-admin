import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LevelUpMaterialsEditComponent
} from "../../../../../modules/level-up-materials/components/level-up-materials-edit/level-up-materials-edit.component";

@Component({
  selector: 'clt-character-level-up-edit-page',
  standalone: true,
  imports: [CommonModule, LevelUpMaterialsEditComponent],
  templateUrl: './character-level-up-edit-page.component.html',
  styleUrl: './character-level-up-edit-page.component.scss'
})
export class CharacterLevelUpEditPageComponent {

}
