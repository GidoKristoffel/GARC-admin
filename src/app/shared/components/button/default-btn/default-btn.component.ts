import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { EBtnType } from '../../../../core/enums/btn-type.enum';

@Component({
  selector: 'clt-default-btn',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './default-btn.component.html',
  styleUrl: './default-btn.component.scss',
})
export class DefaultBtnComponent {
  @Input() type: EBtnType = EBtnType.Button;
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
}
