import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";
import { IOption } from "../../../interfaces/input.interface";
import { ClickOutsideDirective } from "../../../directives/click-outside/click-outside.directive";
import { SvgIconComponent } from "angular-svg-icon";

@Component({
  selector: 'clt-default-select',
  standalone: true,
  imports: [CommonModule, TranslateModule, ClickOutsideDirective, SvgIconComponent],
  templateUrl: './default-select.component.html',
  styleUrl: './default-select.component.scss'
})
export class DefaultSelectComponent implements OnChanges {
  @Input() options: IOption[] = [];
  @Input() defaultOption: string = '';
  @Input() iconSvg: string = '';
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  public readonly svgIconStyle: {[key: string]: number | string} = { 'width.px': 24, display: 'flex' };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['defaultOption'] && changes['defaultOption'].currentValue) {
      this.selected = changes['defaultOption'].currentValue;
    }
  }

  public openSelector: boolean = false;
  public selected: string = '';

  public toggle(): void {
    this.openSelector = !this.openSelector;
  }

  public close(): void {
    this.openSelector = false;
  }

  public select(option: IOption): void {
    this.selected = option.label;
    this.change.emit(option.value);
  }
}
