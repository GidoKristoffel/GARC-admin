import { DestroyRef, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { WeaponsApiService } from "../../api/weapons.api.service";
import { WeaponFormService } from "../weapon-form/weapon-form.service";
import { IWeaponApiForm, IWeaponFormBuilder } from "../../interfaces/form.interface";
import { IWeapon } from "../../interfaces/common.inteface";
import { IWeaponDetailsResponse } from "../../interfaces/api.interfaces";

@Injectable({
  providedIn: 'root'
})
export class WeaponService {
  constructor(
    private router: Router,
    private destroyRef: DestroyRef,
    private weaponsApiService: WeaponsApiService,
    private weaponsFormService: WeaponFormService,
  ) {}

  public createWeapon(
    form: FormGroup<IWeaponFormBuilder>,
    viewLink: string,
    route: ActivatedRoute,
  ): void {
    if (form) {
      const submissionForm: IWeaponApiForm =
        this.weaponsFormService.convertToSend(form);

      this.weaponsApiService
        .create(submissionForm)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((): void => {
          this.router.navigate([viewLink], { relativeTo: route }).then();
        });
    }
  }

  public getWeaponById(
    id: string,
    callback: (weapon: IWeapon) => void,
  ): void {
    this.weaponsApiService
      .getById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: IWeaponDetailsResponse): void => {
        callback(response.weapon);
      });
  }

  public updateWeapon(
    id: string,
    form: FormGroup<IWeaponFormBuilder>,
    detailsLink: string,
    route: ActivatedRoute,
  ): void {
    const submissionForm: IWeaponApiForm =
      this.weaponsFormService.convertToSend(form);

    this.weaponsApiService
      .update(id, submissionForm)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        this.router.navigate([detailsLink], { relativeTo: route }).then();
      });
  }
}
