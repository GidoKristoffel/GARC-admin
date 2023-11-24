import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupDirective, ReactiveFormsModule } from "@angular/forms";
import { InjectReactiveForm } from "../../../../core/classes/inject-reactive-form/inject-reactive-form";
import { EAutocomplete } from "../../../../core/enums/autocomplete.enum";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'clt-text-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss'
})
export class TextInputComponent extends InjectReactiveForm {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() formField: string = '';
  @Input() autocomplete: EAutocomplete = EAutocomplete.On;

  constructor(
    protected override rootFormGroup: FormGroupDirective,
  ) {
    super(rootFormGroup);
  }
}
