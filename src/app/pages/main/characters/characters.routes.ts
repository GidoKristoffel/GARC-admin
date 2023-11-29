import { Routes } from "@angular/router";
import { EPage } from "../../../core/enums/page.enum";

export const charactersPage: Routes = [
  {
    path: EPage.Characters,
    loadComponent: () => import('./playable/playable.component').then(c => c.PlayableComponent),
    loadChildren: () => import('./playable/playable.routers').then(r => r.playableRouters),
  },
  {
    path: EPage.Traveler,
    loadComponent: () => import('./traveler/traveler.component').then(c => c.TravelerComponent)
  },
  {
    path: EPage.Empty,
    redirectTo: EPage.Characters,
    pathMatch: 'full'
  }
];
