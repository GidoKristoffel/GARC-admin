import { Routes } from "@angular/router";
import { EPage } from "../../../../core/enums/page.enum";

export const characterAscensionRoutes: Routes = [
  {
    path: EPage.Create,
    loadComponent: () =>
      import(
        './character-ascension-create-page/character-ascension-create-page.component'
        ).then((c) => c.CharacterAscensionCreatePageComponent),
  },
  {
    path: EPage.View,
    loadComponent: () =>
      import(
        './character-ascension-view-page/character-ascension-view-page.component'
        ).then((c) => c.CharacterAscensionViewPageComponent),
  },
  {
    path: EPage.Details + EPage.ParamId,
    loadComponent: () =>
      import(
        './character-ascension-details-page/character-ascension-details-page.component'
        ).then((c) => c.CharacterAscensionDetailsPageComponent),
  },
  {
    path: EPage.Edit + EPage.ParamId,
    loadComponent: () =>
      import(
        './character-ascension-edit-page/character-ascension-edit-page.component'
        ).then((c) => c.CharacterAscensionEditPageComponent),
  },
  {
    path: EPage.Empty,
    redirectTo: EPage.View,
    pathMatch: 'full',
  },
];
