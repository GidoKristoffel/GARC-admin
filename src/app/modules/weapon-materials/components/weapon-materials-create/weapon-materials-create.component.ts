import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCreate } from "../../../../core/classes/shared-create/shared-create";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FormCacheService } from "../../../../core/services/form-cache/form-cache.service";
import { ActivatedRoute } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { IWeaponMaterialFormBuilder } from "../../interfaces/form.interface";
import { IWeaponMaterialsOptions } from "../../interfaces/options.interface";
import {
  WeaponMaterialsMetadataService
} from "../../services/weapon-materials-metadata/weapon-materials-metadata.service";
import {
  WeaponMaterialsOptionsService
} from "../../services/weapon-materials-options/weapon-materials-options.service";
import { WeaponMaterialsFormService } from "../../services/weapon-materials-form/weapon-materials-form.service";
import { WeaponMaterialsService } from "../../services/weapon-materials/weapon-materials.service";
import {
  TableCreateFacadeComponent
} from "../../../../shared/components/facade/table-create-facade/table-create-facade.component";

@Component({
  selector: 'clt-weapon-materials-create',
  standalone: true,
  imports: [CommonModule, TableCreateFacadeComponent],
  templateUrl: './weapon-materials-create.component.html',
  styleUrl: './weapon-materials-create.component.scss'
})
export class WeaponMaterialsCreateComponent
  extends SharedCreate<FormGroup<IWeaponMaterialFormBuilder>>
  implements OnInit
{
  public options!: IWeaponMaterialsOptions;

  constructor(
    protected override formBuilder: FormBuilder,
    private weaponMaterialsMetadataService: WeaponMaterialsMetadataService,
    private weaponMaterialsOptionsService: WeaponMaterialsOptionsService,
    private weaponMaterialsFormService: WeaponMaterialsFormService,
    private destroyRef: DestroyRef,
    private formCacheService: FormCacheService,
    private weaponMaterialsService: WeaponMaterialsService,
    private route: ActivatedRoute,
  ) {
    super(formBuilder);
  }

  ngOnInit(): void {
    this.initOptions();
    this.initForm();
    this.initCashing();
    this.loadCachedData();
    this.initMetadata(this.weaponMaterialsMetadataService.getCreate());
  }

  private initOptions(): void {
    this.options = this.weaponMaterialsOptionsService.getOptions();
  }

  private initForm(): void {
    this.form = this.weaponMaterialsFormService.getForm();
  }

  protected initCashing(): void {
    this.form.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data): void => {
        this.formCacheService.saveFormData(data);
      });
  }

  protected loadCachedData(): void {
    const cachedData = this.formCacheService.loadFormData();
    if (cachedData) {
      this.form.patchValue(cachedData);
    }
  }

  public save(): void {
    this.weaponMaterialsService.createWeaponMaterial(this.form, this.viewLink, this.route);
  }
}
