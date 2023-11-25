import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from "angular-svg-icon";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'clt-extended-fab-btn',
  standalone: true,
  imports: [CommonModule, SvgIconComponent, TranslateModule],
  templateUrl: './extended-fab-btn.component.html',
  styleUrl: './extended-fab-btn.component.scss'
})
export class ExtendedFabBtnComponent {
  @Input() label: string = '';
  @Input() src: string = '';
}
