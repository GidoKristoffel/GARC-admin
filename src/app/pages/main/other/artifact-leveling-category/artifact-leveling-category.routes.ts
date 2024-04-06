import { Routes } from '@angular/router';
import { EPage } from '../../../../core/enums/page.enum';

export const artifactLevelingCategoryRoutes: Routes = [
  {
    path: EPage.Create,
    loadComponent: () =>
      import(
        './artifact-leveling-category-create-page/artifact-leveling-category-create-page.component'
      ).then((c) => c.ArtifactLevelingCategoryCreatePageComponent),
  },
  {
    path: EPage.Edit,
    loadComponent: () =>
      import(
        './artifact-leveling-category-edit-page/artifact-leveling-category-edit-page.component'
      ).then((c) => c.ArtifactLevelingCategoryEditPageComponent),
  },
  {
    path: EPage.Details,
    loadComponent: () =>
      import(
        './artifact-leveling-category-details/artifact-leveling-category-details.component'
      ).then((c) => c.ArtifactLevelingCategoryDetailsComponent),
  },
  {
    path: EPage.View,
    loadComponent: () =>
      import(
        './artifact-leveling-category-view-page/artifact-leveling-category-view-page.component'
      ).then((c) => c.ArtifactLevelingCategoryViewPageComponent),
  },
  {
    path: EPage.Empty,
    redirectTo: EPage.View,
    pathMatch: 'full',
  },
];
