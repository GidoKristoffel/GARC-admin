import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../modules/main/components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { LanguagePickerComponent } from '../../modules/language/components/language-picker/language-picker.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    RouterOutlet,
    LanguagePickerComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
