import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from "../../modules/auth/components/authorization/authorization.component";

@Component({
  selector: 'app-authorization-page',
  standalone: true,
  imports: [CommonModule, AuthorizationComponent],
  templateUrl: './authorization-page.component.html',
  styleUrl: './authorization-page.component.scss'
})
export class AuthorizationPageComponent {

}
