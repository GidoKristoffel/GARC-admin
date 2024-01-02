import { Routes } from "@angular/router";
import { EPage } from "../../../../core/enums/page.enum";

export const weaponMaterialsRoutes: Routes = [
  {
    path: EPage.Create,
    loadComponent: () =>
      import(
        './weapon-materials-create-page/weapon-materials-create-page.component'
        ).then((c) => c.WeaponMaterialsCreatePageComponent),
  },
  {
    path: EPage.View,
    loadComponent: () =>
      import(
        './weapon-materials-view-page/weapon-materials-view-page.component'
        ).then((c) => c.WeaponMaterialsViewPageComponent),
  },
  {
    path: EPage.Details + EPage.ParamId,
    loadComponent: () =>
      import(
        './weapon-materials-details-page/weapon-materials-details-page.component'
        ).then((c) => c.WeaponMaterialsDetailsPageComponent),
  },
  {
    path: EPage.Edit + EPage.ParamId,
    loadComponent: () =>
      import(
        './weapon-materials-edit-page/weapon-materials-edit-page.component'
        ).then((c) => c.WeaponMaterialsEditPageComponent),
  },
  {
    path: EPage.Empty,
    redirectTo: EPage.View,
    pathMatch: 'full',
  },
];
