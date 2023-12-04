import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LanguagePickerComponent
} from "../../../modules/language/components/language-picker/language-picker.component";

@Component({
  selector: 'clt-settings',
  standalone: true,
  imports: [CommonModule, LanguagePickerComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

}
