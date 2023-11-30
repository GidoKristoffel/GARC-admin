import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";
import { DropdownSelectComponent } from "../../select/dropdown-select/dropdown-select.component";
import { DefaultSelectComponent } from "../../select/default-select/default-select.component";
import { InjectReactiveForm } from "../../../../core/classes/inject-reactive-form/inject-reactive-form";
import { FormGroupDirective } from "@angular/forms";

@Component({
  selector: 'clt-dropdown-field',
  standalone: true,
  imports: [CommonModule, TranslateModule, DropdownSelectComponent, DefaultSelectComponent],
  templateUrl: './dropdown-field.component.html',
  styleUrl: './dropdown-field.component.scss'
})
export class DropdownFieldComponent extends InjectReactiveForm {
  @Input() label: string = '';
  @Input() options: { label: string, value: string }[] = [];
  @Input() formField: string = '';

  constructor(protected override rootFormGroup: FormGroupDirective) {
    super(rootFormGroup);
  }

  public change(value: string): void {
    if (this.formField) {
      this.rootFormGroup.form.controls[this.formField].setValue(value);
    }
  }
}
