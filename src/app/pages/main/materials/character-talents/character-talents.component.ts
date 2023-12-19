import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'clt-character-talents',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './character-talents.component.html',
  styleUrl: './character-talents.component.scss',
})
export class CharacterTalentsComponent {}
