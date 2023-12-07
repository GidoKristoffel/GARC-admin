import { Component } from '@angular/core';
import { CharactersPlayableCreateComponent } from '../../../../../modules/characters/components/characters-playable-create/characters-playable-create.component';

@Component({
  selector: 'clt-playable-create',
  standalone: true,
  imports: [CharactersPlayableCreateComponent],
  templateUrl: './playable-create.component.html',
  styleUrl: './playable-create.component.scss',
})
export class PlayableCreateComponent {}
