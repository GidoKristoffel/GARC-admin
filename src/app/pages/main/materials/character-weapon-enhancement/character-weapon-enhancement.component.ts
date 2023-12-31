import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'clt-character-weapon-enhancement',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './character-weapon-enhancement.component.html',
  styleUrl: './character-weapon-enhancement.component.scss',
})
export class CharacterWeaponEnhancementComponent {}
