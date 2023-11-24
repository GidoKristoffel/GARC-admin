import { Routes } from "@angular/router";
import { EPage } from "../../core/enums/page.enum";

export const mainPage: Routes = [
  {
    path: EPage.Empty,
    loadComponent: () => import('./main-page.component').then(c => c.MainPageComponent),
  }
];
