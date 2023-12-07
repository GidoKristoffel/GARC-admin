import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersPlayableEditComponent } from '../../../../../modules/characters/components/characters-playable-edit/characters-playable-edit.component';

@Component({
  selector: 'clt-playable-edit',
  standalone: true,
  imports: [CommonModule, CharactersPlayableEditComponent],
  templateUrl: './playable-edit.component.html',
  styleUrl: './playable-edit.component.scss',
})
export class PlayableEditComponent {}
