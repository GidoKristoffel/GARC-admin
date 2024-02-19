import { Component, DestroyRef, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownSelectComponent } from '../../select/dropdown-select/dropdown-select.component';
import { DefaultSelectComponent } from '../../select/default-select/default-select.component';
import { InjectReactiveForm } from '../../../../core/classes/inject-reactive-form/inject-reactive-form';
import { FormGroupDirective } from '@angular/forms';
import { FieldLineDirective } from '../../../directives/field-line/field-line.directive';
import { IOption } from '../../../interfaces/input.interface';
import { EDefaultValue } from '../../../../core/enums/default-value.enum';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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

  constructor(
    protected override rootFormGroup: FormGroupDirective,
    private destroyRef: DestroyRef,
  ) {
    super(rootFormGroup);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.initCashing();
    this.initChangeDetection();
  }

  public change(value: string): void {
    if (this.formField) {
      this.rootFormGroup.form.controls[this.formField].setValue(value);
    }
  }

  private initCashing(): void {
    if (this.options) {
      const cashedValue: IOption | undefined = this.options.find(
        (option: IOption): boolean =>
          option.value === this.form.value[this.formField],
      );
      if (cashedValue) {
        this.defaultValue = cashedValue;
      }
    }
  }

  private initChangeDetection(): void {
    console.log('init!!!');
    this.form
      .get(this.formField)
      ?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value: string) => {
        const convertedValue: string = value.toLowerCase().replace(/_/g, '-');
        const changedValue: IOption | undefined = this.options.find(
          (option: IOption): boolean => option.value === convertedValue,
        );
        if (changedValue) {
          this.defaultValue = changedValue;
        }
      });
  }
}
