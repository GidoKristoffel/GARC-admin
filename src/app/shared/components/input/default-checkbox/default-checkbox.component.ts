import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ICheckboxChange, IOption } from "../../../interfaces/input.interface";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'clt-default-checkbox',
  standalone: true,
  imports: [CommonModule, TranslateModule, NgOptimizedImage],
  templateUrl: './default-checkbox.component.html',
  styleUrl: './default-checkbox.component.scss'
})
export class DefaultCheckboxComponent {
  @Input() checked: boolean = false;
  @Input() option!: IOption;
  @Output() changeValue: EventEmitter<ICheckboxChange> = new EventEmitter<ICheckboxChange>();

  public toggle(): void {
    this.checked = !this.checked;
    this.changeValue.emit({checked: this.checked, value: this.option.value});
  }
}
