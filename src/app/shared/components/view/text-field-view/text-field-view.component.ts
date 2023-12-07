import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldLineDirective } from "../../../directives/field-line/field-line.directive";
import { TextInputComponent } from "../../input/text-input/text-input.component";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'clt-text-field-view',
  standalone: true,
    imports: [CommonModule, FieldLineDirective, TextInputComponent, TranslateModule],
  templateUrl: './text-field-view.component.html',
  styleUrl: './text-field-view.component.scss'
})
export class TextFieldViewComponent {
  @Input() label: string = '';
  @Input() valueWrapper: boolean = true;
}
