import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'clt-weapon-materials',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './weapon-materials.component.html',
  styleUrl: './weapon-materials.component.scss',
})
export class WeaponMaterialsComponent {}
