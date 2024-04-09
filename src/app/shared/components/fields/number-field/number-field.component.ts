import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldLineDirective } from "../../../directives/field-line/field-line.directive";
import { TranslateModule } from "@ngx-translate/core";
import { NumberInputComponent } from "../../input/number-input/number-input.component";

@Component({
  selector: 'clt-number-field',
  standalone: true,
  imports: [CommonModule, FieldLineDirective, TranslateModule, NumberInputComponent],
  templateUrl: './number-field.component.html',
  styleUrl: './number-field.component.scss'
})
export class NumberFieldComponent {
  @Input() label: string = '';
  @Input() formField: string = '';
}
