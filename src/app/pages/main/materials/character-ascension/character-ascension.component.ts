import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'clt-character-ascension',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './character-ascension.component.html',
  styleUrl: './character-ascension.component.scss',
})
export class CharacterAscensionComponent {}
