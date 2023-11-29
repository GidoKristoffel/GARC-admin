import { Routes } from "@angular/router";
import { EPage } from "../../../../core/enums/page.enum";

export const playableRouters: Routes = [
  {
    path: EPage.Create,
    loadComponent: () => import('./playable-create/playable-create.component').then(c => c.PlayableCreateComponent),
  },
  {
    path: EPage.View,
    loadComponent: () => import('./playable-view/playable-view.component').then(c => c.PlayableViewComponent),
  },
  {
    path: EPage.Edit,
    loadComponent: () => import('./playable-edit/playable-edit.component').then(c => c.PlayableEditComponent),
  },
  {
    path: EPage.Empty,
    redirectTo: EPage.View,
    pathMatch: 'full'
  }
];
