import { Routes } from "@angular/router";
import { EPage } from "../../../../core/enums/page.enum";

export const characterLevelUpRoutes: Routes = [
  {
    path: EPage.Create,
    loadComponent: () =>
      import(
        './character-level-up-create-page/character-level-up-create-page.component'
        ).then((c) => c.CharacterLevelUpCreatePageComponent),
  },
  {
    path: EPage.View,
    loadComponent: () =>
      import(
        './character-level-up-view-page/character-level-up-view-page.component'
        ).then((c) => c.CharacterLevelUpViewPageComponent),
  },
  {
    path: EPage.Details + EPage.ParamId,
    loadComponent: () =>
      import(
        './character-level-up-details-page/character-level-up-details-page.component'
        ).then((c) => c.CharacterLevelUpDetailsPageComponent),
  },
  {
    path: EPage.Edit + EPage.ParamId,
    loadComponent: () =>
      import(
        './character-level-up-edit-page/character-level-up-edit-page.component'
        ).then((c) => c.CharacterLevelUpEditPageComponent),
  },
  {
    path: EPage.Empty,
    redirectTo: EPage.View,
    pathMatch: 'full',
  },
];
