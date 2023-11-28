import { Routes } from "@angular/router";
import { EPage } from "../../../core/enums/page.enum";

export const charactersPage: Routes = [
  {
    path: EPage.Character,
    loadComponent: () => import('./playable/playable.component').then(c => c.PlayableComponent)
  },
  {
    path: EPage.Traveler,
    loadComponent: () => import('./traveler/traveler.component').then(c => c.TravelerComponent)
  },
  {
    path: EPage.Empty,
    redirectTo: EPage.Character,
    pathMatch: 'full'
  }
];
