import { Routes } from '@angular/router';
import { EPage } from '../../../../core/enums/page.enum';

export const characterTalentsRoutes: Routes = [
  {
    path: EPage.Create,
    loadComponent: () =>
      import(
        './character-talents-create-page/character-talents-create-page.component'
      ).then((c) => c.CharacterTalentsCreatePageComponent),
  },
  {
    path: EPage.View,
    loadComponent: () =>
      import(
        './character-talents-view-page/character-talents-view-page.component'
      ).then((c) => c.CharacterTalentsViewPageComponent),
  },
  {
    path: EPage.Details + EPage.ParamId,
    loadComponent: () =>
      import(
        './character-talents-details-page/character-talents-details-page.component'
      ).then((c) => c.CharacterTalentsDetailsPageComponent),
  },
  {
    path: EPage.Edit + EPage.ParamId,
    loadComponent: () =>
      import(
        './character-talents-edit-page/character-talents-edit-page.component'
      ).then((c) => c.CharacterTalentsEditPageComponent),
  },
  {
    path: EPage.Empty,
    redirectTo: EPage.View,
    pathMatch: 'full',
  },
];
