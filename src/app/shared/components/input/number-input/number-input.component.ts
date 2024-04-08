import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupDirective, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { InjectReactiveForm } from "../../../../core/classes/inject-reactive-form/inject-reactive-form";
import { EAutocomplete } from "../../../../core/enums/autocomplete.enum";

@Component({
  selector: 'clt-number-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './number-input.component.html',
  styleUrl: './number-input.component.scss'
})
export class NumberInputComponent  extends InjectReactiveForm {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() formField: string = '';
  @Input() autocomplete: EAutocomplete = EAutocomplete.On;

  constructor(protected override rootFormGroup: FormGroupDirective) {
    super(rootFormGroup);
  }
}
