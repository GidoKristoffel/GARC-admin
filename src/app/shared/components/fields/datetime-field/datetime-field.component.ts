import { Component, DestroyRef, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DefaultSelectComponent } from '../../select/default-select/default-select.component';
import { IOption } from '../../../interfaces/input.interface';
import { EMonth, EMonthDayCount } from '../../../../core/enums/date.enum';
import { FormGroupDirective, FormsModule } from '@angular/forms';
import { EDefaultValue } from '../../../../core/enums/default-value.enum';
import { InjectReactiveForm } from '../../../../core/classes/inject-reactive-form/inject-reactive-form';
import { FieldLineDirective } from '../../../directives/field-line/field-line.directive';
import { EventService } from '../../../../core/services/event/event.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'clt-datetime-field',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    DefaultSelectComponent,
    FormsModule,
    FieldLineDirective,
  ],
  templateUrl: './datetime-field.component.html',
  styleUrl: './datetime-field.component.scss',
})
export class DatetimeFieldComponent
  extends InjectReactiveForm
  implements OnInit
{
  @Input() label: string = '';
  @Input() formField: string = '';

  public monthOption: IOption[] = [];
  public dayOption: IOption[] = [];
  public defaultDay: IOption = { label: EDefaultValue.OptionLabel, value: '0' };
  private readonly translateKey: string = 'shared.datetime.';
  public currentDay: IOption = { label: EDefaultValue.OptionLabel, value: '0' };
  public currentMonth: IOption = {
    label: EDefaultValue.OptionLabel,
    value: '0',
  };

  constructor(
    protected override rootFormGroup: FormGroupDirective,
    private eventService: EventService,
    private destroyRef: DestroyRef,
  ) {
    super(rootFormGroup);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.initOptions();
    this.initAutocompleteEvent();

    this.setValue();
  }

  private initOptions(): void {
    this.monthOption = this.generateOptions<typeof EMonth>(EMonth, 'month');
  }

  private generateOptions<T extends Record<string, string>>(
    enumObject: T,
    translateSubKey: string = '',
  ): IOption[] {
    return Object.keys(enumObject).map((value: string): IOption => {
      return {
        label: this.translateKey + translateSubKey + '.' + value.toLowerCase(),
        value: value,
      };
    });
  }

  private setValue(): void {
    if (this.form.value[this.formField]) {
      const date: Date = new Date(this.form.value[this.formField]);
      const month: string = date.toLocaleString('en', { month: 'long' });
      const day: string = date.toLocaleString('en', { day: 'numeric' });

      this.currentMonth =
        this.monthOption.find((m: IOption): boolean => m.value === month) ||
        this.currentMonth;
      if (EMonthDayCount.hasOwnProperty(this.currentMonth.value)) {
        this.dayOption = this.generateObjectArray(
          +EMonthDayCount[
            this.currentMonth.value as keyof typeof EMonthDayCount
            ],
        );
      }
      this.currentDay = { label: day, value: day };
    }
  }

  public change(key: string): void {
    if (EMonthDayCount.hasOwnProperty(key)) {
      this.dayOption = this.generateObjectArray(
        +EMonthDayCount[key as keyof typeof EMonthDayCount],
      );
    }
    this.updateDate();
  }

  private generateObjectArray(n: number): IOption[] {
    return Array.from({ length: n }, (_, i) => ({
      label: String(i + 1),
      value: String(i + 1),
    }));
  }

  private setSelectedDate(date: Date | null): void {
    this.rootFormGroup.form.controls[this.formField].setValue(date);
  }

  public updateDate(): void {
    if (this.isValidDateSelected()) {
      const date: Date = this.createSelectedDate();
      this.setSelectedDate(date);
    } else {
      this.setSelectedDate(null);
    }
  }

  private isValidDateSelected(): boolean {
    return Boolean(
      this.currentMonth.value &&
        +this.currentDay.value &&
        +this.currentDay.value <= this.dayOption.length,
    );
  }

  private createSelectedDate(): Date {
    const monthIndex: number = Object.keys(EMonth).indexOf(
      this.currentMonth.value as keyof typeof EMonth,
    );
    return new Date(0, monthIndex, +this.currentDay.value);
  }

  private initAutocompleteEvent(): void {
    this.eventService.dataAutocomplete
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.setValue());
  }
}
