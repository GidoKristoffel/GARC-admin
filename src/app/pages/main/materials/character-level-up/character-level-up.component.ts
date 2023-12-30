import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'clt-character-level-up',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './character-level-up.component.html',
  styleUrl: './character-level-up.component.scss',
})
export class CharacterLevelUpComponent {}
