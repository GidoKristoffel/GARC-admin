import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EDialogBtnType } from "../../../../core/enums/btn-type.enum";

@Component({
  selector: 'clt-dialog-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog-btn.component.html',
  styleUrl: './dialog-btn.component.scss'
})
export class DialogBtnComponent {
  @Input() type: EDialogBtnType = EDialogBtnType.Agree;
}
