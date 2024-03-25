import { Routes } from '@angular/router';
import { EPage } from '../../../../core/enums/page.enum';

export const artifactLevelingCategoryRoutes: Routes = [
  {
    path: EPage.Create,
    loadComponent: () =>
      import(
        './artifact-leveling-category-create/artifact-leveling-category-create.component'
      ).then((c) => c.ArtifactLevelingCategoryCreateComponent),
  },
  {
    path: EPage.Empty,
    redirectTo: EPage.View,
    pathMatch: 'full',
  },
];
