import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCreate } from "../../../../core/classes/shared-create/shared-create";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FormCacheService } from "../../../../core/services/form-cache/form-cache.service";
import { ActivatedRoute } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { IWeaponFormBuilder } from "../../interfaces/form.interface";
import { IWeaponOptions } from "../../interfaces/options.interface";
import { WeaponMetadataService } from "../../services/weapon-metadata/weapon-metadata.service";
import { WeaponOptionsService } from "../../services/weapon-options/weapon-options.service";
import { WeaponFormService } from "../../services/weapon-form/weapon-form.service";
import { WeaponService } from "../../services/weapon/weapon.service";
import {
  TableCreateFacadeComponent
} from "../../../../shared/components/facade/table-create-facade/table-create-facade.component";

@Component({
  selector: 'clt-weapons-create',
  standalone: true,
  imports: [CommonModule, TableCreateFacadeComponent],
  templateUrl: './weapons-create.component.html',
  styleUrl: './weapons-create.component.scss'
})
export class WeaponsCreateComponent
  extends SharedCreate<FormGroup<IWeaponFormBuilder>>
  implements OnInit
{
  public options!: IWeaponOptions;

  constructor(
    protected override formBuilder: FormBuilder,
    private weaponsMetadataService: WeaponMetadataService,
    private weaponsOptionsService: WeaponOptionsService,
    private weaponsFormService: WeaponFormService,
    private destroyRef: DestroyRef,
    private formCacheService: FormCacheService,
    private weaponsService: WeaponService,
    private route: ActivatedRoute,
  ) {
    super(formBuilder);
  }

  ngOnInit(): void {
    this.initOptions();
    this.initForm();
    this.initCashing();
    this.loadCachedData();
    this.initMetadata(this.weaponsMetadataService.getCreate());
  }

  private initOptions(): void {
    this.options = this.weaponsOptionsService.getOptions();
  }

  private initForm(): void {
    this.form = this.weaponsFormService.getForm();
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
    this.weaponsService.createWeapon(this.form, this.viewLink, this.route);
  }
}
