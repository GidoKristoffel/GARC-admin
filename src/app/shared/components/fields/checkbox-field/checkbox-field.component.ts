import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";
import { ICheckboxChange, IOption } from "../../../interfaces/input.interface";
import { DefaultCheckboxComponent } from "../../input/default-checkbox/default-checkbox.component";
import { InjectReactiveForm } from "../../../../core/classes/inject-reactive-form/inject-reactive-form";
import { FormGroupDirective } from "@angular/forms";
import { FieldLineDirective } from "../../../directives/field-line/field-line.directive";

@Component({
  selector: 'clt-checkbox-field',
  standalone: true,
  imports: [CommonModule, TranslateModule, DefaultCheckboxComponent, FieldLineDirective],
  templateUrl: './checkbox-field.component.html',
  styleUrl: './checkbox-field.component.scss'
})
export class CheckboxFieldComponent extends InjectReactiveForm implements OnChanges {
  @Input() label: string = '';
  @Input() options: IOption[] = [];
  @Input() formField: string = '';

  private optionValues: string[] = [];

  constructor(protected override rootFormGroup: FormGroupDirective) {
    super(rootFormGroup);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options'] && changes['options'].currentValue) {
      this.optionValues = changes['options'].currentValue.map((option: IOption) => option.value);
    }
  }

  public change({checked, value}: ICheckboxChange): void {
    if (this.formField) {
      const formFieldValue = this.rootFormGroup.form.get(this.formField)?.value;

      if (Array.isArray(formFieldValue)) {
        this.rootFormGroup.form.controls[this.formField].setValue(
          this.optionValues.filter(
            (option: string) => (formFieldValue.includes(option) && option !== value) || (option === value && checked)
          )
        );
      }
    }
  }
}
