import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";
import { TextInputComponent } from "../../input/text-input/text-input.component";
import { InjectReactiveForm } from "../../../../core/classes/inject-reactive-form/inject-reactive-form";
import { FormGroupDirective } from "@angular/forms";

@Component({
  selector: 'clt-image-field',
  standalone: true,
  imports: [CommonModule, TranslateModule, TextInputComponent, NgOptimizedImage],
  templateUrl: './image-field.component.html',
  styleUrl: './image-field.component.scss'
})
export class ImageFieldComponent extends InjectReactiveForm {
  @Input() label: string = '';
  @Input() formField: string = '';

  public imageUrl: string = '';

  constructor(
    protected override rootFormGroup: FormGroupDirective,
  ) {
    super(rootFormGroup);
  }

  loadImage() {
    if (this.isValidUrl(this.form.value[this.formField])) {
      this.imageUrl = this.form.value[this.formField];
    }
  }

  private isValidUrl(url: string): boolean {
    const pattern = /^((http|https):\/\/)/;
    return pattern.test(url);
  }
}
