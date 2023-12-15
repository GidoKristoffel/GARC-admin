import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'clt-weekly-bosses',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './weekly-bosses.component.html',
  styleUrl: './weekly-bosses.component.scss',
})
export class WeeklyBossesComponent {}
