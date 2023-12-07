import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'clt-enemies',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './enemies.component.html',
  styleUrl: './enemies.component.scss',
})
export class EnemiesComponent {}
