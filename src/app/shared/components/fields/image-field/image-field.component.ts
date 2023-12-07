import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TextInputComponent } from '../../input/text-input/text-input.component';
import { InjectReactiveForm } from '../../../../core/classes/inject-reactive-form/inject-reactive-form';
import { FormGroupDirective } from '@angular/forms';
import { DefaultBtnComponent } from '../../button/default-btn/default-btn.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { FieldLineDirective } from '../../../directives/field-line/field-line.directive';

@Component({
  selector: 'clt-image-field',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    TextInputComponent,
    NgOptimizedImage,
    DefaultBtnComponent,
    SvgIconComponent,
    FieldLineDirective,
  ],
  templateUrl: './image-field.component.html',
  styleUrl: './image-field.component.scss',
})
export class ImageFieldComponent extends InjectReactiveForm implements OnInit {
  @Input() label: string = '';
  @Input() formField: string = '';

  public imageUrl: string = '';
  public readonly icon: string = './assets/images/icons/load-img.svg';

  constructor(protected override rootFormGroup: FormGroupDirective) {
    super(rootFormGroup);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.loadImage();
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
