import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TalentMaterialsEditComponent
} from "../../../../../modules/talent-materials/components/talent-materials-edit/talent-materials-edit.component";

@Component({
  selector: 'clt-character-talents-edit-page',
  standalone: true,
  imports: [CommonModule, TalentMaterialsEditComponent],
  templateUrl: './character-talents-edit-page.component.html',
  styleUrl: './character-talents-edit-page.component.scss'
})
export class CharacterTalentsEditPageComponent {

}
