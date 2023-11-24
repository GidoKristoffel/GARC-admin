import { Routes } from "@angular/router";
import { EPage } from "../../core/enums/page.enum";

export const authorizationPage: Routes = [
  {
    path: EPage.Empty,
    loadComponent: () => import('./authorization-page.component').then((c) => c.AuthorizationPageComponent)
  }
];
