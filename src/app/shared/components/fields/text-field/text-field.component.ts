import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";
import { TextInputComponent } from "../../input/text-input/text-input.component";

@Component({
  selector: 'clt-text-field',
  standalone: true,
  imports: [CommonModule, TranslateModule, TextInputComponent],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss'
})
export class TextFieldComponent {
  @Input() label: string = '';
  @Input() formField: string = '';
}
