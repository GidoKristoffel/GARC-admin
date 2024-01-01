import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedEdit } from "../../../../core/classes/shared-edit/shared-edit";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { LanguageService } from "../../../../core/services/language/language.service";
import { IWeaponMaterialFormBuilder } from "../../interfaces/form.interface";
import { IWeaponMaterialsOptions } from "../../interfaces/options.interface";
import {
  WeaponMaterialsMetadataService
} from "../../services/weapon-materials-metadata/weapon-materials-metadata.service";
import { WeaponMaterialsFormService } from "../../services/weapon-materials-form/weapon-materials-form.service";
import {
  WeaponMaterialsOptionsService
} from "../../services/weapon-materials-options/weapon-materials-options.service";
import { WeaponMaterialsService } from "../../services/weapon-materials/weapon-materials.service";
import { IWeaponMaterial } from "../../interfaces/common.inteface";
import {
  TableEditFacadeComponent
} from "../../../../shared/components/facade/table-edit-facade/table-edit-facade.component";

@Component({
  selector: 'clt-weapon-materials-edit',
  standalone: true,
  imports: [CommonModule, TableEditFacadeComponent],
  templateUrl: './weapon-materials-edit.component.html',
  styleUrl: './weapon-materials-edit.component.scss'
})
export class WeaponMaterialsEditComponent
  extends SharedEdit<FormGroup<IWeaponMaterialFormBuilder>>
  implements OnInit
{
  public options!: IWeaponMaterialsOptions;

  constructor(
    private weaponMaterialsMetadataService: WeaponMaterialsMetadataService,
    private weaponMaterialsFormService: WeaponMaterialsFormService,
    private weaponMaterialsOptionsService: WeaponMaterialsOptionsService,
    private weaponMaterialsService: WeaponMaterialsService,
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
    this.initMetadata(this.weaponMaterialsMetadataService.getEdit());
  }

  protected initForm(): void {
    this.form = this.weaponMaterialsFormService.getForm();
    if (this.id) {
      this.getCharacterById(this.id);
    }
  }

  private getCharacterById(id: string): void {
    this.weaponMaterialsService.getWeaponMaterialById(id, (weaponMaterial: IWeaponMaterial): void => {
      this.form.patchValue(this.weaponMaterialsFormService.convertToForm(weaponMaterial));
      this.initOptions();
      this.loaded = true;
    });
  }

  private initOptions(): void {
    this.options = this.weaponMaterialsOptionsService.getOptions();
  }

  protected save(): void {
    if (this.form && this.id) {
      this.weaponMaterialsService.updateWeaponMaterial(this.id, this.form, this.detailsLink, this.route);
    }
  }
}
