import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'clt-dropdown-field',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './dropdown-field.component.html',
  styleUrl: './dropdown-field.component.scss'
})
export class DropdownFieldComponent {
  @Input() label: string = '';
  @Input() options: { label: string, value: string }[] = [];
}
