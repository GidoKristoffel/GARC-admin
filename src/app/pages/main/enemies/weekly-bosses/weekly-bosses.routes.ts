import { Routes } from '@angular/router';
import { EPage } from '../../../../core/enums/page.enum';

export const weeklyBossesRoutes: Routes = [
  {
    path: EPage.Create,
    loadComponent: () =>
      import(
        './weekly-bosses-create-page/weekly-bosses-create-page.component'
      ).then((c) => c.WeeklyBossesCreatePageComponent),
  },
  {
    path: EPage.View,
    loadComponent: () =>
      import(
        './weekly-bosses-view-page/weekly-bosses-view-page.component'
      ).then((c) => c.WeeklyBossesViewPageComponent),
  },
  {
    path: EPage.Details + EPage.ParamId,
    loadComponent: () =>
      import(
        './weekly-bosses-details-page/weekly-bosses-details-page.component'
      ).then((c) => c.WeeklyBossesDetailsPageComponent),
  },
  {
    path: EPage.Edit + EPage.ParamId,
    loadComponent: () =>
      import(
        './weekly-bosses-edit-page/weekly-bosses-edit-page.component'
      ).then((c) => c.WeeklyBossesEditPageComponent),
  },
  {
    path: EPage.Empty,
    redirectTo: EPage.View,
    pathMatch: 'full',
  },
];
