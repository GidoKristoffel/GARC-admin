import { Routes } from "@angular/router";
import { EPage } from "../../../core/enums/page.enum";

export const enemiesRoutes: Routes = [
  {
    path: EPage.Mob,
    loadComponent: () => import('./mobs/mobs.component').then(c => c.MobsComponent),
  },
  {
    path: EPage.EliteBoss,
    loadComponent: () => import('./elite-bosses/elite-bosses.component').then(c => c.EliteBossesComponent),
  },
  {
    path: EPage.WeeklyBoss,
    loadComponent: () => import('./weekly-bosses/weekly-bosses.component').then(c => c.WeeklyBossesComponent),
  },
  {
    path: EPage.Empty,
    redirectTo: EPage.Mob,
    pathMatch: "full"
  }
];
