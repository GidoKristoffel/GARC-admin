import { Routes } from '@angular/router';
import { EPage } from '../../../core/enums/page.enum';

export const materialsRoutes: Routes = [
  {
    path: EPage.CharactersWeaponEnhancement,
    loadComponent: () =>
      import(
        './character-weapon-enhancement/character-weapon-enhancement.component'
      ).then((c) => c.CharacterWeaponEnhancementComponent),
  },
  {
    path: EPage.CharacterLevelUp,
    loadComponent: () =>
      import('./character-level-up/character-level-up.component').then(
        (c) => c.CharacterLevelUpComponent,
      ),
  },
  {
    path: EPage.CharacterAscension,
    loadComponent: () =>
      import('./character-ascension/character-ascension.component').then(
        (c) => c.CharacterAscensionComponent,
      ),
  },
  {
    path: EPage.CharacterTalents,
    loadComponent: () =>
      import('./character-talents/character-talents.component').then(
        (c) => c.CharacterTalentsComponent,
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
