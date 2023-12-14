import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'clt-elite-bosses',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './elite-bosses.component.html',
  styleUrl: './elite-bosses.component.scss',
})
export class EliteBossesComponent {}
