import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'clt-checkbox-field',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './checkbox-field.component.html',
  styleUrl: './checkbox-field.component.scss'
})
export class CheckboxFieldComponent {
  @Input() label: string = '';
}
