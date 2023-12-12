import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'clt-mobs',
  standalone: true,
    imports: [CommonModule, RouterOutlet],
  templateUrl: './mobs.component.html',
  styleUrl: './mobs.component.scss',
})
export class MobsComponent {}
