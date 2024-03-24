import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'clt-other-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './other-page.component.html',
  styleUrl: './other-page.component.scss'
})
export class OtherPageComponent {

}
