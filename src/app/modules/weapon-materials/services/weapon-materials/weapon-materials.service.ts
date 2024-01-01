import { DestroyRef, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { WeaponMaterialsApiService } from "../../api/weapon-materials.api.service";
import { WeaponMaterialsFormService } from "../weapon-materials-form/weapon-materials-form.service";
import { IWeaponMaterialApiForm, IWeaponMaterialFormBuilder } from "../../interfaces/form.interface";
import { IWeaponMaterial } from "../../interfaces/common.inteface";
import { IWeaponMaterialDetailsResponse } from "../../interfaces/api.interfaces";

@Injectable({
  providedIn: 'root'
})
export class WeaponMaterialsService {
  constructor(
    private router: Router,
    private destroyRef: DestroyRef,
    private weaponMaterialsApiService: WeaponMaterialsApiService,
    private weaponMaterialsFormService: WeaponMaterialsFormService,
  ) {}

  public createWeaponMaterial(
    form: FormGroup<IWeaponMaterialFormBuilder>,
    viewLink: string,
    route: ActivatedRoute,
  ): void {
    if (form) {
      const submissionForm: IWeaponMaterialApiForm =
        this.weaponMaterialsFormService.convertToSend(form);

      this.weaponMaterialsApiService
        .create(submissionForm)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((): void => {
          this.router.navigate([viewLink], { relativeTo: route }).then();
        });
    }
  }

  public getWeaponMaterialById(
    id: string,
    callback: (weaponMaterial: IWeaponMaterial) => void,
  ): void {
    this.weaponMaterialsApiService
      .getById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: IWeaponMaterialDetailsResponse): void => {
        callback(response.weaponMaterial);
      });
  }

  public updateWeaponMaterial(
    id: string,
    form: FormGroup<IWeaponMaterialFormBuilder>,
    detailsLink: string,
    route: ActivatedRoute,
  ): void {
    const submissionForm: IWeaponMaterialApiForm =
      this.weaponMaterialsFormService.convertToSend(form);

    this.weaponMaterialsApiService
      .update(id, submissionForm)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        this.router.navigate([detailsLink], { relativeTo: route }).then();
      });
  }
}
