import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AscensionMaterialsCreateComponent
} from "../../../../../modules/ascension-material/components/ascension-materials-create/ascension-materials-create.component";

@Component({
  selector: 'clt-character-ascension-create-page',
  standalone: true,
  imports: [CommonModule, AscensionMaterialsCreateComponent],
  templateUrl: './character-ascension-create-page.component.html',
  styleUrl: './character-ascension-create-page.component.scss'
})
export class CharacterAscensionCreatePageComponent {

}
