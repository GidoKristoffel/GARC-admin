import { Routes } from "@angular/router";
import { EPage } from "../../../../core/enums/page.enum";

export const characterWeaponEnhancementRoutes: Routes = [
  {
    path: EPage.Create,
    loadComponent: () =>
      import(
        './character-weapon-enhancement-create-page/character-weapon-enhancement-create-page.component'
        ).then((c) => c.CharacterWeaponEnhancementCreatePageComponent),
  },
  {
    path: EPage.View,
    loadComponent: () =>
      import(
        './character-weapon-enhancement-view-page/character-weapon-enhancement-view-page.component'
        ).then((c) => c.CharacterWeaponEnhancementViewPageComponent),
  },
  {
    path: EPage.Details + EPage.ParamId,
    loadComponent: () =>
      import(
        './character-weapon-enhancement-details-page/character-weapon-enhancement-details-page.component'
        ).then((c) => c.CharacterWeaponEnhancementDetailsPageComponent),
  },
  {
    path: EPage.Edit + EPage.ParamId,
    loadComponent: () =>
      import(
        './character-weapon-enhancement-edit-page/character-weapon-enhancement-edit-page.component'
        ).then((c) => c.CharacterWeaponEnhancementEditPageComponent),
  },
  {
    path: EPage.Empty,
    redirectTo: EPage.View,
    pathMatch: 'full',
  },
];
