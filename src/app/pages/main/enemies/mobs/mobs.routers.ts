import { Routes } from '@angular/router';
import { EPage } from '../../../../core/enums/page.enum';

export const mobsPage: Routes = [
  {
    path: EPage.Create,
    loadComponent: () =>
      import('./mobs-create-page/mobs-create-page.component').then(
        (c) => c.MobsCreatePageComponent,
      ),
  },
  {
    path: EPage.View,
    loadComponent: () =>
      import('./mobs-view-page/mobs-view-page.component').then(
        (c) => c.MobsViewPageComponent,
      ),
  },
  {
    path: EPage.Details + EPage.ParamId,
    loadComponent: () =>
      import('./mobs-details-page/mobs-details-page.component').then(
        (c) => c.MobsDetailsPageComponent,
      ),
  },
  {
    path: EPage.Edit + EPage.ParamId,
    loadComponent: () =>
      import('./mobs-edit-page/mobs-edit-page.component').then(
        (c) => c.MobsEditPageComponent,
      ),
  },
  {
    path: EPage.Empty,
    redirectTo: EPage.View,
    pathMatch: 'full',
  },
];
