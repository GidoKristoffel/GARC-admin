import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";
import { DefaultSelectComponent } from "../../select/default-select/default-select.component";
import { IOption } from "../../../interfaces/input.interface";
import { EMonth, EMonthDayCount } from "../../../../core/enums/date.enum";

@Component({
  selector: 'clt-datetime-field',
  standalone: true,
  imports: [CommonModule, TranslateModule, DefaultSelectComponent],
  templateUrl: './datetime-field.component.html',
  styleUrl: './datetime-field.component.scss'
})
export class DatetimeFieldComponent implements OnInit {
  @Input() label: string = '';

  public monthOption: IOption[] = [];
  public dayOption: IOption[] = [];
  private readonly translateKey: string = 'page.datetime.';

  ngOnInit(): void {
    this.initOptions();
  }

  private initOptions(): void {
    this.monthOption = this.generateOptions<typeof EMonth>(EMonth, 'month');
  }

  private generateOptions<T extends Object>(enumObject: T, translateSubKey: string = ''): IOption[] {
    return Object.values(enumObject).map((value): IOption => {
      return {
        label: this.translateKey + translateSubKey + '.' + value,
        value
      }
    });
  }

  public change(event: string): void {
    const key: string = (event.charAt(0).toUpperCase() + event.slice(1));
    const enumKey: keyof typeof EMonthDayCount = key as keyof typeof EMonthDayCount;
    debugger;
    if (EMonthDayCount.hasOwnProperty(enumKey)) {
      this.dayOption = this.generateObjectArray(EMonthDayCount[enumKey]);
    }
  }

  private generateObjectArray(n: number): IOption[] {
    return Array.from({ length: n }, (_, i) => ({ label: String(i + 1), value: String(i + 1) }));
  }
}
