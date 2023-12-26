import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxFieldComponent } from "../../fields/checkbox-field/checkbox-field.component";
import { DatetimeFieldComponent } from "../../fields/datetime-field/datetime-field.component";
import { DefaultBtnComponent } from "../../button/default-btn/default-btn.component";
import { DropdownFieldComponent } from "../../fields/dropdown-field/dropdown-field.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ImageFieldComponent } from "../../fields/image-field/image-field.component";
import { ScrollClassDirective } from "../../../directives/scroll-class/scroll-class.directive";
import { TextFieldComponent } from "../../fields/text-field/text-field.component";
import { TranslateModule } from "@ngx-translate/core";
import { RouterLink } from "@angular/router";
import { EFormType } from "../../../../core/enums/form.enum";
import { EBtnType } from "../../../../core/enums/btn-type.enum";
import { IOptions } from "../../../interfaces/input.interface";
import { IFormMetadata } from "../../../interfaces/form.interface";

@Component({
  selector: 'clt-table-create-facade',
  standalone: true,
  imports: [CommonModule, CheckboxFieldComponent, DatetimeFieldComponent, DefaultBtnComponent, DropdownFieldComponent, FormsModule, ImageFieldComponent, ScrollClassDirective, TextFieldComponent, TranslateModule, RouterLink, ReactiveFormsModule],
  templateUrl: './table-create-facade.component.html',
  styleUrl: './table-create-facade.component.scss'
})
export class TableCreateFacadeComponent {
  @Input() form: any;
  @Input() metadata: IFormMetadata[] = [];
  @Input() viewLink: string = '';
  @Input() options: IOptions = {};
  @Output() save: EventEmitter<void> = new EventEmitter<void>();

  public readonly btnType: EBtnType = EBtnType.Submit;
  public readonly fieldType: typeof EFormType = EFormType;

  public onSave(): void {
    this.save.emit();
  }
}
