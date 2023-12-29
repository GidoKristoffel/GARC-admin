import { DestroyRef, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { LevelUpMaterialsApiService } from "../../api/level-up-materials.api.service";
import { LevelUpMaterialsFormService } from "../level-up-materials-form/level-up-materials-form.service";
import { ILevelUpMaterialApiForm, ILevelUpMaterialFormBuilder } from "../../interfaces/form.interface";
import { ILevelUpMaterial } from "../../interfaces/common.inteface";
import { ILevelUpMaterialDetailsResponse } from "../../interfaces/api.interfaces";

@Injectable({
  providedIn: 'root'
})
export class LevelUpMaterialsService {
  constructor(
    private router: Router,
    private destroyRef: DestroyRef,
    private levelUpMaterialsApiService: LevelUpMaterialsApiService,
    private levelUpMaterialsFormService: LevelUpMaterialsFormService,
  ) {}

  public createLevelUpMaterial(
    form: FormGroup<ILevelUpMaterialFormBuilder>,
    viewLink: string,
    route: ActivatedRoute,
  ): void {
    if (form) {
      const submissionForm: ILevelUpMaterialApiForm =
        this.levelUpMaterialsFormService.convertToSend(form);

      this.levelUpMaterialsApiService
        .create(submissionForm)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((): void => {
          this.router.navigate([viewLink], { relativeTo: route }).then();
        });
    }
  }

  public getLevelUpMaterialById(
    id: string,
    callback: (levelUpMaterial: ILevelUpMaterial) => void,
  ): void {
    this.levelUpMaterialsApiService
      .getById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: ILevelUpMaterialDetailsResponse): void => {
        callback(response.levelUpMaterial);
      });
  }

  public updateLevelUpMaterial(
    id: string,
    form: FormGroup<ILevelUpMaterialFormBuilder>,
    detailsLink: string,
    route: ActivatedRoute,
  ): void {
    const submissionForm: ILevelUpMaterialApiForm =
      this.levelUpMaterialsFormService.convertToSend(form);

    this.levelUpMaterialsApiService
      .update(id, submissionForm)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        this.router.navigate([detailsLink], { relativeTo: route }).then();
      });
  }
}
