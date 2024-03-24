import { Routes } from '@angular/router';
import { EPage } from '../../../core/enums/page.enum';

export const otherRoutes: Routes = [
  {
    path: EPage.ArtifactLevelingCategory,
    loadComponent: () =>
      import(
        './artifact-leveling-category/artifact-leveling-category.component'
      ).then((c) => c.ArtifactLevelingCategoryComponent),
  },
  {
    path: EPage.Empty,
    redirectTo: `${EPage.Accounts}`,
    pathMatch: 'full',
  },
];
