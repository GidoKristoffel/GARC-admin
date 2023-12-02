import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { CheckboxFieldComponent } from "../../../../shared/components/fields/checkbox-field/checkbox-field.component";
import { DatetimeFieldComponent } from "../../../../shared/components/fields/datetime-field/datetime-field.component";
import { DropdownFieldComponent } from "../../../../shared/components/fields/dropdown-field/dropdown-field.component";
import { ImageFieldComponent } from "../../../../shared/components/fields/image-field/image-field.component";
import { ScrollClassDirective } from "../../../../shared/directives/scroll-class/scroll-class.directive";
import { TextFieldComponent } from "../../../../shared/components/fields/text-field/text-field.component";
import { DefaultBtnComponent } from "../../../../shared/components/button/default-btn/default-btn.component";
import { TranslateModule } from "@ngx-translate/core";
import { EPage } from "../../../../core/enums/page.enum";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'clt-characters-playable-view',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CheckboxFieldComponent, DatetimeFieldComponent, DropdownFieldComponent, ImageFieldComponent, ScrollClassDirective, TextFieldComponent, DefaultBtnComponent, TranslateModule, RouterLink],
  templateUrl: './characters-playable-view.component.html',
  styleUrl: './characters-playable-view.component.scss'
})
export class CharactersPlayableViewComponent {
  public readonly charactersCreateLink: string = '../' + EPage.Create;
}
