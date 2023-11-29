import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultBtnComponent } from "../../../../../shared/components/button/default-btn/default-btn.component";
import { TranslateModule } from "@ngx-translate/core";
import { TextFieldComponent } from "../../../../../shared/components/fields/text-field/text-field.component";
import {
  DropdownFieldComponent
} from "../../../../../shared/components/fields/dropdown-field/dropdown-field.component";
import {
  CheckboxFieldComponent
} from "../../../../../shared/components/fields/checkbox-field/checkbox-field.component";
import {
  DatetimeFieldComponent
} from "../../../../../shared/components/fields/datetime-field/datetime-field.component";
import { ImageFieldComponent } from "../../../../../shared/components/fields/image-field/image-field.component";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { ScrollClassDirective } from "../../../../../shared/directives/scroll-class/scroll-class.directive";

@Component({
  selector: 'clt-playable-create',
  standalone: true,
  imports: [CommonModule, DefaultBtnComponent, TranslateModule, TextFieldComponent, DropdownFieldComponent, CheckboxFieldComponent, DatetimeFieldComponent, ImageFieldComponent, ReactiveFormsModule, ScrollClassDirective],
  templateUrl: './playable-create.component.html',
  styleUrl: './playable-create.component.scss'
})
export class PlayableCreateComponent {
  public form = this.formBuilder.group({
    nameEn: [''],
    nameUa: [''],
    nameRu: [''],
    constellationEn: [''],
    constellationUa: [''],
    constellationRu: [''],
    titleEn: [''],
    titleUa: [''],
    titleRu: [''],
    affiliationEn: [''],
    affiliationUa: [''],
    affiliationRu: [''],
  });

  constructor(private formBuilder: FormBuilder) {}
}
