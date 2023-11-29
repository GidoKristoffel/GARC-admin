import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'clt-dropdown-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown-select.component.html',
  styleUrl: './dropdown-select.component.scss'
})
export class DropdownSelectComponent {
  @Input() options: { label: string, value: string }[] = [];
}
