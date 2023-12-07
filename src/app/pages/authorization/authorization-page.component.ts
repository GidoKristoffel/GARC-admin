import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from '../../modules/auth/components/authorization/authorization.component';
import { LanguagePickerComponent } from '../../modules/language/components/language-picker/language-picker.component';

@Component({
  selector: 'app-authorization-page',
  standalone: true,
  imports: [CommonModule, AuthorizationComponent, LanguagePickerComponent],
  templateUrl: './authorization-page.component.html',
  styleUrl: './authorization-page.component.scss',
})
export class AuthorizationPageComponent {}
