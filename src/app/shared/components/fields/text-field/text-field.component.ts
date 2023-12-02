import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";
import { TextInputComponent } from "../../input/text-input/text-input.component";
import { FieldLineDirective } from "../../../directives/field-line/field-line.directive";

@Component({
  selector: 'clt-text-field',
  standalone: true,
  imports: [CommonModule, TranslateModule, TextInputComponent, FieldLineDirective],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss'
})
export class TextFieldComponent {
  @Input() label: string = '';
  @Input() formField: string = '';
}
