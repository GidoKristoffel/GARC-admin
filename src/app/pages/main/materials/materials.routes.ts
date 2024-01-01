import { Routes } from '@angular/router';
import { EPage } from '../../../core/enums/page.enum';

export const materialsRoutes: Routes = [
  {
    path: EPage.CharactersWeaponEnhancement,
    loadComponent: () =>
      import(
        './character-weapon-enhancement/character-weapon-enhancement.component'
      ).then((c) => c.CharacterWeaponEnhancementComponent),
    loadChildren: () =>
      import(
        './character-weapon-enhancement/character-weapon-enhancement.routes'
      ).then((r) => r.characterWeaponEnhancementRoutes),
  },
  {
    path: EPage.CharacterLevelUp,
    loadComponent: () =>
      import('./character-level-up/character-level-up.component').then(
        (c) => c.CharacterLevelUpComponent,
      ),
    loadChildren: () =>
      import('./character-level-up/character-level-up.routes').then(
        (r) => r.characterLevelUpRoutes,
      ),
  },
  {
    path: EPage.CharacterAscension,
    loadComponent: () =>
      import('./character-ascension/character-ascension.component').then(
        (c) => c.CharacterAscensionComponent,
      ),
    loadChildren: () =>
      import('./character-ascension/character-ascension.routes').then(
        (c) => c.characterAscensionRoutes,
      ),
  },
  {
    path: EPage.CharacterTalents,
    loadComponent: () =>
      import('./character-talents/character-talents.component').then(
        (c) => c.CharacterTalentsComponent,
      ),
    loadChildren: () =>
      import('./character-talents/character-talents.routes').then(
        (r) => r.characterTalentsRoutes,
      ),
  },
  {
    path: EPage.Weapons,
    loadComponent: () =>
      import('./weapon-materials/weapon-materials.component').then(
        (c) => c.WeaponMaterialsComponent,
      ),
  },
  {
    path: EPage.Empty,
    redirectTo: EPage.CharactersWeaponEnhancement,
    pathMatch: 'full',
  },
];
