import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultBtnComponent } from "../../button/default-btn/default-btn.component";
import { SvgIconComponent } from "angular-svg-icon";
import { TextInputComponent } from "../../input/text-input/text-input.component";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { IParsePageFormBuilder } from "../../../interfaces/form.interface";
import { EBtnType } from "../../../../core/enums/btn-type.enum";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'clt-parse-page-field',
  standalone: true,
  imports: [CommonModule, DefaultBtnComponent, SvgIconComponent, TextInputComponent, ReactiveFormsModule, TranslateModule],
  templateUrl: './parse-page-field.component.html',
  styleUrl: './parse-page-field.component.scss'
})
export class ParsePageFieldComponent {
  @Input() form!: FormGroup<IParsePageFormBuilder>;
  @Input() loading: boolean = false;
  @Output() parse: EventEmitter<void> = new EventEmitter<void>();

  public readonly formField: string = 'pageUrl';
  public readonly btnType: EBtnType = EBtnType.Submit;

  public onParse(): void {
    this.parse.emit();
  }
}
