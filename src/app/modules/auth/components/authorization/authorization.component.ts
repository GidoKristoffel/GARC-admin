import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EPage } from "../../../../core/enums/page.enum";
import { EBtnType } from "../../../../core/enums/btn-type.enum";
import { SignService } from "../../../../core/services/sign/sign.service";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'clt-authorization',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
