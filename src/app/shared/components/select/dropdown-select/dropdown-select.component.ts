import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IOption } from '../../../interfaces/input.interface';

@Component({
  selector: 'clt-dropdown-select',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './dropdown-select.component.html',
  styleUrl: './dropdown-select.component.scss',
})
export class DropdownSelectComponent implements OnChanges {
  @Input() options: { label: string; value: string }[] = [];
  @Input() defaultOption: string = '';

  public openSelector: boolean = false;
  public selected: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['defaultOption'] && changes['defaultOption'].currentValue) {
      this.selected = changes['defaultOption'].currentValue;
    }
  }

  public toggle(): void {
    this.openSelector = !this.openSelector;
  }

  public select(option: IOption): void {
    this.selected = option.label;
    // this.change.emit(option.value);
  }
}
