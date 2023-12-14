import { Routes } from '@angular/router';
import { EPage } from '../../../../core/enums/page.enum';

export const eliteBossesPage: Routes = [
  {
    path: EPage.Create,
    loadComponent: () =>
      import(
        './elite-bosses-create-page/elite-bosses-create-page.component'
      ).then((c) => c.EliteBossesCreatePageComponent),
  },
  {
    path: EPage.View,
    loadComponent: () =>
      import('./elite-bosses-view-page/elite-bosses-view-page.component').then(
        (c) => c.EliteBossesViewPageComponent,
      ),
  },
  {
    path: EPage.Details + EPage.ParamId,
    loadComponent: () =>
      import(
        './elite-bosses-details-page/elite-bosses-details-page.component'
      ).then((c) => c.EliteBossesDetailsPageComponent),
  },
  {
    path: EPage.Edit + EPage.ParamId,
    loadComponent: () =>
      import('./elite-bosses-edit-page/elite-bosses-edit-page.component').then(
        (c) => c.EliteBossesEditPageComponent,
      ),
  },
  {
    path: EPage.Empty,
    redirectTo: EPage.View,
    pathMatch: 'full',
  },
];
