import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'clt-weapons',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './weapons.component.html',
  styleUrl: './weapons.component.scss',
})
export class WeaponsComponent {}
