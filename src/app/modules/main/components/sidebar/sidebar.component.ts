import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EPage } from "../../../../core/enums/page.enum";
import { SignService } from "../../../../core/services/sign/sign.service";
import { SidebarBtnComponent } from "../../../../shared/components/button/sidebar-btn/sidebar-btn.component";
import {
  HorizontalDividerComponent
} from "../../../../shared/components/divider/horizontal-divider/horizontal-divider.component";
import { TranslateModule } from "@ngx-translate/core";
import { ScrollClassDirective } from "../../../../shared/directives/scroll-class/scroll-class.directive";

export enum ESidebarType {
  Button = 'button',
  Divider = 'Divider'
}

@Component({
  selector: 'clt-sidebar',
  standalone: true,
  imports: [CommonModule, SidebarBtnComponent, HorizontalDividerComponent, TranslateModule, ScrollClassDirective],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public readonly baseUrl: string = EPage.Main + '/';
  public readonly baseUrlAccount: string = this.baseUrl + EPage.Account + '/';
  public readonly baseUrlCharacter: string = this.baseUrl + EPage.Character + '/';
  public readonly baseUrlWeapon: string = this.baseUrl + EPage.Weapon + '/';
  public readonly baseUrlMaterial: string = this.baseUrl + EPage.Material + '/';
  public readonly baseUrlEnemy: string = this.baseUrl + EPage.Enemy + '/';
  public readonly settingsLink: string = this.baseUrl + EPage.Settings;

  public readonly sidebarType: typeof ESidebarType = ESidebarType;

  public readonly sidebar = {
    main: [
      {
        id: 0,
        type: ESidebarType.Divider,
        label: 'page.main.sidebar.account.title',
        icon: '',
        link: '',
      },
      {
        id: 1,
        type: ESidebarType.Button,
        label: 'page.main.sidebar.account.admin',
        icon: './assets/images/icons/account-admin.svg',
        link: this.baseUrlAccount + EPage.Admin,
      },
      {
        id: 2,
        type: ESidebarType.Button,
        label: 'page.main.sidebar.account.user',
        icon: './assets/images/icons/account-user.svg',
        link: this.baseUrlAccount + EPage.User,
      },
      {
        id: 3,
        type: ESidebarType.Divider,
        label: 'page.main.sidebar.character.title',
        icon: '',
        link: '',
      },
      {
        id: 4,
        type: ESidebarType.Button,
        label: 'page.main.sidebar.character.traveler',
        icon: './assets/images/icons/traveler.svg',
        link: this.baseUrlCharacter + EPage.Traveler,
      },
      {
        id: 5,
        type: ESidebarType.Button,
        label: 'page.main.sidebar.character.character',
        icon: './assets/images/icons/character.svg',
        link: this.baseUrlCharacter + EPage.Character,
      },
      {
        id: 6,
        type: ESidebarType.Divider,
        label: 'page.main.sidebar.weapon.title',
        icon: '',
        link: '',
      },
      {
        id: 7,
        type: ESidebarType.Button,
        label: 'page.main.sidebar.weapon.weapon',
        icon: './assets/images/icons/weapon.svg',
        link: this.baseUrlWeapon + EPage.Weapon,
      },
      {
        id: 8,
        type: ESidebarType.Divider,
        label: 'page.main.sidebar.material.title',
        icon: '',
        link: '',
      },
      {
        id: 9,
        type: ESidebarType.Button,
        label: 'page.main.sidebar.material.character-weapon-enhancement',
        icon: './assets/images/icons/character-weapon-upgrades.svg',
        link: this.baseUrlMaterial + EPage.CharacterWeaponUpgrades,
      },
      {
        id: 10,
        type: ESidebarType.Button,
        label: 'page.main.sidebar.material.character-level-up',
        icon: './assets/images/icons/character-development.svg',
        link: this.baseUrlMaterial + EPage.CharacterDevelopment,
      },
      {
        id: 11,
        type: ESidebarType.Button,
        label: 'page.main.sidebar.material.character-ascension',
        icon: './assets/images/icons/character-elevation.svg',
        link: this.baseUrlMaterial + EPage.CharacterElevation,
      },
      {
        id: 12,
        type: ESidebarType.Button,
        label: 'page.main.sidebar.material.character-talents',
        icon: './assets/images/icons/character-talents.svg',
        link: this.baseUrlMaterial + EPage.CharacterTalents,
      },
      {
        id: 13,
        type: ESidebarType.Button,
        label: 'page.main.sidebar.material.weapon',
        icon: './assets/images/icons/material-weapon.svg',
        link: this.baseUrlMaterial + EPage.Weapon,
      },
      {
        id: 14,
        type: ESidebarType.Divider,
        label: 'page.main.sidebar.enemy.title',
        icon: '',
        link: '',
      },
      {
        id: 15,
        type: ESidebarType.Button,
        label: 'page.main.sidebar.enemy.mob',
        icon: './assets/images/icons/mob.svg',
        link: this.baseUrlEnemy + EPage.Mob,
      },
      {
        id: 16,
        type: ESidebarType.Button,
        label: 'page.main.sidebar.enemy.elite-boss',
        icon: './assets/images/icons/elite-boss.svg',
        link: this.baseUrlEnemy + EPage.EliteBoss,
      },
      {
        id: 17,
        type: ESidebarType.Button,
        label: 'page.main.sidebar.enemy.weekly-boss',
        icon: './assets/images/icons/weekly-boss.svg',
        link: this.baseUrlEnemy + EPage.WeeklyBoss,
      }
    ],
  };

  constructor(
    private signService: SignService,
  ) {}

  public logOut(): void {
    this.signService.logOut();
  }
}
