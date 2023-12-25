import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AscensionMaterialsDetailsComponent
} from "../../../../../modules/ascension-material/components/ascension-materials-details/ascension-materials-details.component";

@Component({
  selector: 'clt-character-ascension-details-page',
  standalone: true,
  imports: [CommonModule, AscensionMaterialsDetailsComponent],
  templateUrl: './character-ascension-details-page.component.html',
  styleUrl: './character-ascension-details-page.component.scss'
})
export class CharacterAscensionDetailsPageComponent {

}
