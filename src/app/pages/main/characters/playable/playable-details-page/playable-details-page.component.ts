import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CharactersPlayableDetailsComponent
} from "../../../../../modules/characters/components/characters-playable-details/characters-playable-details.component";

@Component({
  selector: 'clt-playable-details-page',
  standalone: true,
  imports: [CommonModule, CharactersPlayableDetailsComponent],
  templateUrl: './playable-details-page.component.html',
  styleUrl: './playable-details-page.component.scss'
})
export class PlayableDetailsPageComponent {

}
