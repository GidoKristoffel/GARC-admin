import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'clt-datetime-field',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './datetime-field.component.html',
  styleUrl: './datetime-field.component.scss'
})
export class DatetimeFieldComponent {
  @Input() label: string = '';
}
