import { Routes } from '@angular/router';
import { EPage } from '../../../core/enums/page.enum';

export const enemiesRoutes: Routes = [
  {
    path: EPage.Mobs,
    loadComponent: () =>
      import('./mobs/mobs.component').then((c) => c.MobsComponent),
  },
  {
    path: EPage.EliteBosses,
    loadComponent: () =>
      import('./elite-bosses/elite-bosses.component').then(
        (c) => c.EliteBossesComponent,
      ),
  },
  {
    path: EPage.WeeklyBosses,
    loadComponent: () =>
      import('./weekly-bosses/weekly-bosses.component').then(
        (c) => c.WeeklyBossesComponent,
      ),
  },
  {
    path: EPage.Empty,
    redirectTo: EPage.Mobs,
    pathMatch: 'full',
  },
];
