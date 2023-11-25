import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EBtnType } from "../../../../core/enums/btn-type.enum";

@Component({
  selector: 'clt-default-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './default-btn.component.html',
  styleUrl: './default-btn.component.scss'
})
export class DefaultBtnComponent {
  @Input() type: EBtnType = EBtnType.Button;
}
