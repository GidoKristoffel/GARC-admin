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
    path: `${ EPage.Weapon }/${ EPage.Weapon }`,
    loadComponent: () => import('./weapons/weapons.component').then(c => c.WeaponsComponent),
  },
  {
    path: EPage.Material,
    loadComponent: () => import('./materials/materials.component').then(c => c.MaterialsComponent),
    loadChildren: () => import('./materials/materials.routes').then(r => r.materialsRoutes),
  },
  {
    path: EPage.Enemy,
    loadComponent: () => import('./enemies/enemies.component').then(c => c.EnemiesComponent),
    loadChildren: () => import('./enemies/enemies.routes').then(r => r.enemiesRoutes),
  },
  {
    path: EPage.Settings,
    loadComponent: () => import('./settings/settings.component').then(c => c.SettingsComponent)
  },
  {
    path: EPage.Empty,
    redirectTo: `${ EPage.Account }`,
    pathMatch: 'full'
  },
];
