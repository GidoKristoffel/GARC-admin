import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from "angular-svg-icon";

@Component({
  selector: 'clt-icon-btn',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './icon-btn.component.html',
  styleUrl: './icon-btn.component.scss'
})
export class IconBtnComponent {
  @Input() src: string = '';
}
