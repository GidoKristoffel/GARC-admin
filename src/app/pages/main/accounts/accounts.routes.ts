import { Routes } from "@angular/router";
import { EPage } from "../../../core/enums/page.enum";

export const accountsPage: Routes = [
  {
    path: EPage.Admin,
    loadComponent: () => import('./admin-accounts/admin-accounts.component').then(c => c.AdminAccountsComponent)
  },
  {
    path: EPage.User,
    loadComponent: () => import('./user-accounts/user-accounts.component').then(c => c.UserAccountsComponent)
  },
  {
    path: EPage.Empty,
    redirectTo: `${ EPage.Admin }`,
    pathMatch: "full"
  }
];
