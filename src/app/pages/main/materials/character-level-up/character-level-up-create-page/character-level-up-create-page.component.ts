import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LevelUpMaterialsCreateComponent
} from "../../../../../modules/level-up-materials/components/level-up-materials-create/level-up-materials-create.component";

@Component({
  selector: 'clt-character-level-up-create-page',
  standalone: true,
  imports: [CommonModule, LevelUpMaterialsCreateComponent],
  templateUrl: './character-level-up-create-page.component.html',
  styleUrl: './character-level-up-create-page.component.scss'
})
export class CharacterLevelUpCreatePageComponent {

}
