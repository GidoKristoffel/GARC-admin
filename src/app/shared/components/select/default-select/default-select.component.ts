import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";
import { IOption } from "../../../interfaces/input.interface";
import { ClickOutsideDirective } from "../../../directives/click-outside/click-outside.directive";
import { SvgIconComponent } from "angular-svg-icon";
import { isObjectInArray } from "../../../../core/utilities/object.utility";
import { EDefaultValue } from "../../../../core/enums/default-value.enum";

@Component({
  selector: 'clt-default-select',
  standalone: true,
  imports: [CommonModule, TranslateModule, ClickOutsideDirective, SvgIconComponent],
  templateUrl: './default-select.component.html',
  styleUrl: './default-select.component.scss'
})
export class DefaultSelectComponent implements OnChanges {
  @Input() options: IOption[] = [];
  @Input() defaultOption: IOption = {label: EDefaultValue.OptionLabel, value: ''};
  @Input() iconSvg: string = '';
  @Input() value: IOption = {label: EDefaultValue.OptionLabel, value: ''};
  @Output() valueChange: EventEmitter<IOption> = new EventEmitter<IOption>();
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  public readonly svgIconStyle: {[key: string]: number | string} = { 'width.px': 24, display: 'flex' };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['defaultOption'] && changes['defaultOption'].currentValue) {
      this.selected = changes['defaultOption'].currentValue
    }

    if (changes['options'] && changes['options'].currentValue) {
      if (!isObjectInArray(this.selected, changes['options'].currentValue)) {
        this.selected = this.defaultOption;
      }
    }
  }

  public openSelector: boolean = false;
  public selected: IOption = {
    label: '',
    value: ''
  };

  public toggle(): void {
    this.openSelector = !this.openSelector;
  }

  public close(): void {
    this.openSelector = false;
  }

  public select(option: IOption): void {
    this.selected = option;
    this.updateValue(option);
    this.change.emit(option.value);
  }

  private updateValue(option: IOption): void {
    this.value = option;
    this.valueChange.emit(this.value);
  }
}
