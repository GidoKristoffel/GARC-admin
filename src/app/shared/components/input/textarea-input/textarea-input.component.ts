import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupDirective, ReactiveFormsModule } from "@angular/forms";
import { InjectReactiveForm } from "../../../../core/classes/inject-reactive-form/inject-reactive-form";
import { TranslateModule } from "@ngx-translate/core";
import { defaultTextareaRows } from "../../../../core/constants/input.constant";
import { ScrollClassDirective } from "../../../directives/scroll-class/scroll-class.directive";

@Component({
  selector: 'clt-textarea-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, ScrollClassDirective],
  templateUrl: './textarea-input.component.html',
  styleUrl: './textarea-input.component.scss'
})
export class TextareaInputComponent extends InjectReactiveForm {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() formField: string = '';
  @Input() rows: number = defaultTextareaRows;

  constructor(protected override rootFormGroup: FormGroupDirective) {
    super(rootFormGroup);
  }
}
