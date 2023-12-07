import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'clt-playable',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './playable.component.html',
  styleUrl: './playable.component.scss',
})
export class PlayableComponent {}
