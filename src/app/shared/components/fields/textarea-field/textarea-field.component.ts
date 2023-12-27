import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldLineDirective } from "../../../directives/field-line/field-line.directive";
import { TranslateModule } from "@ngx-translate/core";
import { TextareaInputComponent } from "../../input/textarea-input/textarea-input.component";

@Component({
  selector: 'clt-textarea-field',
  standalone: true,
  imports: [CommonModule, FieldLineDirective, TranslateModule, TextareaInputComponent],
  templateUrl: './textarea-field.component.html',
  styleUrl: './textarea-field.component.scss'
})
export class TextareaFieldComponent {
  @Input() label: string = '';
  @Input() formField: string = '';
}
