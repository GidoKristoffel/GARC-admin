import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { InjectReactiveForm } from '../../../../../core/classes/inject-reactive-form/inject-reactive-form';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'clt-password-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss',
})
export class PasswordInputComponent extends InjectReactiveForm {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() formField: string = '';

  constructor(protected override rootFormGroup: FormGroupDirective) {
    super(rootFormGroup);
  }
}
