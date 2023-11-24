import { Routes } from '@angular/router';
import { EPage } from "./core/enums/page.enum";
import { authenticatedGuard } from "./modules/auth/guards/authenticated.guard";
import { nonAuthenticatedGuard } from "./modules/auth/guards/non-authenticated.guard";

export const routes: Routes = [
  {
    path: EPage.Authorization,
    loadChildren: () => import('./pages/authorization/authorization-page.routes').then(r => r.authorizationPage),
    canActivate: [nonAuthenticatedGuard],
  },
  {
    path: EPage.Main,
    loadChildren: () => import('./pages/main/main-page.routes').then(r => r.mainPage),
    canActivate: [authenticatedGuard],
  },
  {
    path: EPage.Empty,
    redirectTo: `/${ EPage.Main }`,
    pathMatch: "full"
  }
];
