import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'clt-image-field',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './image-field.component.html',
  styleUrl: './image-field.component.scss'
})
export class ImageFieldComponent {
  @Input() label: string = '';
}
