import { Routes } from "@angular/router";
import { EPage } from "../../core/enums/page.enum";

export const mainPage: Routes = [
  {
    path: EPage.Account,
    loadComponent: () => import('./accounts/accounts.component').then(c => c.AccountsComponent),
    loadChildren: () => import('./accounts/accounts.routes').then(r => r.accountsPage)
  },
  {
    path: EPage.Character,
    loadComponent: () => import('./characters/characters.component').then(c => c.CharactersComponent),
    loadChildren: () => import('./characters/characters.routes').then(r => r.charactersPage)
  },
  {
    path: EPage.Material,
    loadComponent: () => import('./materials/materials.component').then(c => c.MaterialsComponent),
  },
  {
    path: EPage.Weapon,
    loadComponent: () => import('./weapons/weapons.component').then(c => c.WeaponsComponent),
  },
  {
    path: EPage.Empty,
    redirectTo: `${ EPage.Account }`,
    pathMatch: 'full'
  },
];
