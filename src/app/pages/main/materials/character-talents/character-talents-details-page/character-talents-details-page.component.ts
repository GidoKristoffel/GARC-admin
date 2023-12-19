import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TalentMaterialsDetailsComponent
} from "../../../../../modules/talent-materials/components/talent-materials-details/talent-materials-details.component";

@Component({
  selector: 'clt-character-talents-details-page',
  standalone: true,
  imports: [CommonModule, TalentMaterialsDetailsComponent],
  templateUrl: './character-talents-details-page.component.html',
  styleUrl: './character-talents-details-page.component.scss'
})
export class CharacterTalentsDetailsPageComponent {

}
