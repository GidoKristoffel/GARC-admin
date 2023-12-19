import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TalentMaterialsCreateComponent
} from "../../../../../modules/talent-materials/components/talent-materials-create/talent-materials-create.component";

@Component({
  selector: 'clt-character-talents-create-page',
  standalone: true,
  imports: [CommonModule, TalentMaterialsCreateComponent],
  templateUrl: './character-talents-create-page.component.html',
  styleUrl: './character-talents-create-page.component.scss'
})
export class CharacterTalentsCreatePageComponent {

}
