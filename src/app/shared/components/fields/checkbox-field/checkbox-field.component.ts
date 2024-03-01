import {
  Component,
  DestroyRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ICheckboxChange, IOption } from '../../../interfaces/input.interface';
import { DefaultCheckboxComponent } from '../../input/default-checkbox/default-checkbox.component';
import { InjectReactiveForm } from '../../../../core/classes/inject-reactive-form/inject-reactive-form';
import { FormGroupDirective } from '@angular/forms';
import { FieldLineDirective } from '../../../directives/field-line/field-line.directive';
import { EventService } from '../../../../core/services/event/event.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'clt-checkbox-field',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    DefaultCheckboxComponent,
    FieldLineDirective,
  ],
  templateUrl: './checkbox-field.component.html',
  styleUrl: './checkbox-field.component.scss',
})
export class CheckboxFieldComponent
  extends InjectReactiveForm
  implements OnInit, OnChanges
{
  @Input() label: string = '';
  @Input() options: IOption[] = [];
  @Input() formField: string = '';

  private optionValues: string[] = [];
  public optionsData: { option: IOption; checked: boolean }[] = [];

  constructor(
    protected override rootFormGroup: FormGroupDirective,
    private eventService: EventService,
    private destroyRef: DestroyRef,
  ) {
    super(rootFormGroup);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.setValue();
    this.initAutocompleteEvent();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options'] && changes['options'].currentValue) {
      this.optionValues = changes['options'].currentValue.map(
        (option: IOption) => option.value,
      );
    }
  }

  private setValue(): void {
    if (this.options) {
      this.optionsData = this.options.map((option: IOption) => {
        return {
          option,
          checked: this.isChecked(option.value),
        };
      });
      console.log(this.form);
    }
  }

  public change({ checked, value }: ICheckboxChange): void {
    if (this.formField) {
      const formFieldValue = this.rootFormGroup.form.get(this.formField)?.value;

      if (Array.isArray(formFieldValue)) {
        this.rootFormGroup.form.controls[this.formField].setValue(
          this.optionValues.filter(
            (option: string) =>
              (formFieldValue.includes(option) && option !== value) ||
              (option === value && checked),
          ),
        );
      }
    }
  }

  public isChecked(value: any): boolean {
    return this.form.value[this.formField].includes(value);
  }

  private initAutocompleteEvent(): void {
    this.eventService.dataAutocomplete
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        console.log(this.form);
        this.setValue();
      });
  }
}
