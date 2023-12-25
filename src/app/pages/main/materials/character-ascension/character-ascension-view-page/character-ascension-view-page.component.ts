import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AscensionMaterialViewTableComponent
} from "../../../../../modules/ascension-material/components/ascension-material-view-table/ascension-material-view-table.component";

@Component({
  selector: 'clt-character-ascension-view-page',
  standalone: true,
  imports: [CommonModule, AscensionMaterialViewTableComponent],
  templateUrl: './character-ascension-view-page.component.html',
  styleUrl: './character-ascension-view-page.component.scss'
})
export class CharacterAscensionViewPageComponent {

}
