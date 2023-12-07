import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownSelectComponent } from '../../select/dropdown-select/dropdown-select.component';
import { DefaultSelectComponent } from '../../select/default-select/default-select.component';
import { InjectReactiveForm } from '../../../../core/classes/inject-reactive-form/inject-reactive-form';
import { FormGroupDirective } from '@angular/forms';
import { FieldLineDirective } from '../../../directives/field-line/field-line.directive';
import { IOption } from '../../../interfaces/input.interface';
import { EDefaultValue } from '../../../../core/enums/default-value.enum';

@Component({
  selector: 'clt-dropdown-field',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    DropdownSelectComponent,
    DefaultSelectComponent,
    FieldLineDirective,
  ],
  templateUrl: './dropdown-field.component.html',
  styleUrl: './dropdown-field.component.scss',
})
export class DropdownFieldComponent
  extends InjectReactiveForm
  implements OnInit
{
  @Input() label: string = '';
  @Input() options: IOption[] = [];
  @Input() formField: string = '';

  public defaultValue: IOption = {
    label: EDefaultValue.OptionLabel,
    value: '',
  };

  constructor(protected override rootFormGroup: FormGroupDirective) {
    super(rootFormGroup);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    const cashedValue = this.options.find(
      (option: IOption): boolean =>
        option.value === this.form.value[this.formField],
    );
    if (cashedValue) {
      this.defaultValue = cashedValue;
    }
  }

  public change(value: string): void {
    if (this.formField) {
      this.rootFormGroup.form.controls[this.formField].setValue(value);
    }
  }
}
