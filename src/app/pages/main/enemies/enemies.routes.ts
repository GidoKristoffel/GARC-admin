import { Routes } from '@angular/router';
import { EPage } from '../../../core/enums/page.enum';

export const enemiesRoutes: Routes = [
  {
    path: EPage.Mobs,
    loadComponent: () =>
      import('./mobs/mobs.component').then((c) => c.MobsComponent),
    loadChildren: () => import('./mobs/mobs.routers').then((r) => r.mobsPage),
  },
  {
    path: EPage.EliteBosses,
    loadComponent: () =>
      import('./elite-bosses/elite-bosses.component').then(
        (c) => c.EliteBossesComponent,
      ),
    loadChildren: () =>
      import('./elite-bosses/elite-bosses.routers').then(
        (r) => r.eliteBossesPage,
      ),
  },
  {
    path: EPage.WeeklyBosses,
    loadComponent: () =>
      import('./weekly-bosses/weekly-bosses.component').then(
        (c) => c.WeeklyBossesComponent,
      ),
    loadChildren: () => import('./weekly-bosses/weekly-bosses.routes').then((c) => c.weeklyBossesRoutes),
  },
  {
    path: EPage.Empty,
    redirectTo: EPage.Mobs,
    pathMatch: 'full',
  },
];
