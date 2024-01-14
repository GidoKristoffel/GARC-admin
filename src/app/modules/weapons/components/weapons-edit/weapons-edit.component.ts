import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedEdit } from "../../../../core/classes/shared-edit/shared-edit";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { LanguageService } from "../../../../core/services/language/language.service";
import { IWeaponFormBuilder } from "../../interfaces/form.interface";
import { IWeaponOptions } from "../../interfaces/options.interface";
import { WeaponMetadataService } from "../../services/weapon-metadata/weapon-metadata.service";
import { WeaponFormService } from "../../services/weapon-form/weapon-form.service";
import { WeaponOptionsService } from "../../services/weapon-options/weapon-options.service";
import { WeaponService } from "../../services/weapon/weapon.service";
import { IWeapon } from "../../interfaces/common.inteface";

@Component({
  selector: 'clt-weapons-edit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weapons-edit.component.html',
  styleUrl: './weapons-edit.component.scss'
})
export class WeaponsEditComponent
  extends SharedEdit<FormGroup<IWeaponFormBuilder>>
  implements OnInit
{
  public options!: IWeaponOptions;

  constructor(
    private weaponsMetadataService: WeaponMetadataService,
    private weaponsFormService: WeaponFormService,
    private weaponsOptionsService: WeaponOptionsService,
    private weaponsService: WeaponService,
    protected override route: ActivatedRoute,
    protected override destroyRef: DestroyRef,
    protected override languageService: LanguageService,
  ) {
    super(route, destroyRef, languageService);
  }

  ngOnInit(): void {
    this.initLanguage();
    this.initRoute();
    this.initForm();
    this.initMetadata(this.weaponsMetadataService.getEdit());
  }

  protected initForm(): void {
    this.form = this.weaponsFormService.getForm();
    if (this.id) {
      this.getCharacterById(this.id);
    }
  }

  private getCharacterById(id: string): void {
    this.weaponsService.getWeaponById(id, (weapon: IWeapon): void => {
      this.form.patchValue(this.weaponsFormService.convertToForm(weapon));
      this.initOptions();
      this.loaded = true;
    });
  }

  private initOptions(): void {
    this.options = this.weaponsOptionsService.getOptions();
  }

  protected save(): void {
    if (this.form && this.id) {
      this.weaponsService.updateWeapon(this.id, this.form, this.detailsLink, this.route);
    }
  }
}
