import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersPlayableViewComponent } from '../../../../../modules/characters/components/characters-playable-view/characters-playable-view.component';

@Component({
  selector: 'clt-playable-view',
  standalone: true,
  imports: [CommonModule, CharactersPlayableViewComponent],
  templateUrl: './playable-view.component.html',
  styleUrl: './playable-view.component.scss',
})
export class PlayableViewComponent {}
