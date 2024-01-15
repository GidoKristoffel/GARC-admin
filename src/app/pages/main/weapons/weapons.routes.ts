import { Routes } from "@angular/router";
import { EPage } from "../../../core/enums/page.enum";

export const weaponsPage: Routes = [
  {
    path: EPage.Create,
    loadComponent: () =>
      import('./weapons-create-page/weapons-create-page.component').then(
        (c) => c.WeaponsCreatePageComponent,
      ),
  },
  {
    path: EPage.View,
    loadComponent: () =>
      import('./weapons-view-table-page/weapons-view-table-page.component').then(
        (c) => c.WeaponsViewTablePageComponent,
      ),
  },
  {
    path: EPage.Details + EPage.ParamId,
    loadComponent: () =>
      import('./weapons-details-page/weapons-details-page.component').then(
        (c) => c.WeaponsDetailsPageComponent,
      ),
  },
  {
    path: EPage.Edit + EPage.ParamId,
    loadComponent: () =>
      import('./weapons-edit-page/weapons-edit-page.component').then(
        (c) => c.WeaponsEditPageComponent,
      ),
  },
  {
    path: EPage.Empty,
    redirectTo: EPage.View,
    pathMatch: 'full',
  },
];
