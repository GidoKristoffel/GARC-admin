import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";
import { HorizontalDividerComponent } from "../divider/horizontal-divider/horizontal-divider.component";
import { DialogBtnComponent } from "../button/dialog-btn/dialog-btn.component";
import { EDialogBtnType } from "../../../core/enums/btn-type.enum";

@Component({
  selector: 'clt-dialog',
  standalone: true,
  imports: [CommonModule, TranslateModule, HorizontalDividerComponent, DialogBtnComponent],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  @Input() answer: string = '';
  @Input() agreeLabel: string = '';
  @Input() disagreeLabel: string = '';
  @Output() agree: EventEmitter<void> = new EventEmitter<void>();
  @Output() disagree: EventEmitter<void> = new EventEmitter<void>();

  public readonly dialogBtnType: typeof EDialogBtnType = EDialogBtnType;

  public agreeEmit(): void {
    this.agree.emit();
  }

  public disagreeEmit(): void {
    this.disagree.emit();
  }
}
