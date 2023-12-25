import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AscensionMaterialsEditComponent
} from "../../../../../modules/ascension-material/components/ascension-materials-edit/ascension-materials-edit.component";

@Component({
  selector: 'clt-character-ascension-edit-page',
  standalone: true,
  imports: [CommonModule, AscensionMaterialsEditComponent],
  templateUrl: './character-ascension-edit-page.component.html',
  styleUrl: './character-ascension-edit-page.component.scss'
})
export class CharacterAscensionEditPageComponent {

}
