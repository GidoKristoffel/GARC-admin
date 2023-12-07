import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'clt-horizontal-divider',
  standalone: true,
  imports: [CommonModule, TranslateModule, NgOptimizedImage],
  templateUrl: './horizontal-divider.component.html',
  styleUrl: './horizontal-divider.component.scss',
})
export class HorizontalDividerComponent {
  @Input() label: string = '';
}
