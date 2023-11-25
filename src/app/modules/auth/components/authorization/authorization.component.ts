import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EPage } from "../../../../core/enums/page.enum";
import { EBtnType } from "../../../../core/enums/btn-type.enum";
import { SignService } from "../../../../core/services/sign/sign.service";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { TextInputComponent } from "../../../../shared/components/input/text-input/text-input.component";
import {
  PasswordInputComponent
} from "../../../../shared/components/input/password-input/password-input/password-input.component";
import { DefaultSelectComponent } from "../../../../shared/components/select/default-select/default-select.component";
import { DefaultBtnComponent } from "../../../../shared/components/button/default-btn/default-btn.component";
import { TranslateModule } from "@ngx-translate/core";
import {
  HorizontalDividerComponent
} from "../../../../shared/components/divider/horizontal-divider/horizontal-divider.component";
import {
  ExtendedFabBtnComponent
} from "../../../../shared/components/button/extended-fab-btn/extended-fab-btn.component";

@Component({
  selector: 'clt-authorization',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TextInputComponent, PasswordInputComponent, DefaultSelectComponent, DefaultBtnComponent, TranslateModule, HorizontalDividerComponent, ExtendedFabBtnComponent],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss'
})
export class AuthorizationComponent {
  public readonly btnType: EBtnType = EBtnType.Submit;
  public form = this.fb.group({
    login: [''],
    password: ['']
  });

  constructor(
    private signService: SignService,
    private fb: FormBuilder
  ) {}

  public logIn(): void {
    this.signService.logIn(String(this.form.value.login), String(this.form.value.password));
  }
}
