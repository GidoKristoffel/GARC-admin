import { DestroyRef, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { EnhancementMaterialsApiService } from "../../api/enhancement-materials.api.service";
import { EnhancementMaterialsFormService } from "../enhancement-materials-form/enhancement-materials-form.service";
import { IEnhancementMaterialApiForm, IEnhancementMaterialFormBuilder } from "../../interfaces/form.interface";
import { IEnhancementMaterial } from "../../interfaces/common.inteface";
import { IEnhancementMaterialDetailsResponse } from "../../interfaces/api.interfaces";

@Injectable({
  providedIn: 'root'
})
export class EnhancementMaterialsService {
  constructor(
    private router: Router,
    private destroyRef: DestroyRef,
    private enhancementMaterialsApiService: EnhancementMaterialsApiService,
    private enhancementMaterialsFormService: EnhancementMaterialsFormService,
  ) {}

  public createEnhancementMaterial(
    form: FormGroup<IEnhancementMaterialFormBuilder>,
    viewLink: string,
    route: ActivatedRoute,
  ): void {
    if (form) {
      const submissionForm: IEnhancementMaterialApiForm =
        this.enhancementMaterialsFormService.convertToSend(form);

      this.enhancementMaterialsApiService
        .create(submissionForm)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((): void => {
          this.router.navigate([viewLink], { relativeTo: route }).then();
        });
    }
  }

  public getEnhancementMaterialById(
    id: string,
    callback: (enhancementMaterial: IEnhancementMaterial) => void,
  ): void {
    this.enhancementMaterialsApiService
      .getById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: IEnhancementMaterialDetailsResponse): void => {
        callback(response.enhancementMaterial);
      });
  }

  public updateEnhancementMaterial(
    id: string,
    form: FormGroup<IEnhancementMaterialFormBuilder>,
    detailsLink: string,
    route: ActivatedRoute,
  ): void {
    const submissionForm: IEnhancementMaterialApiForm =
      this.enhancementMaterialsFormService.convertToSend(form);

    this.enhancementMaterialsApiService
      .update(id, submissionForm)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        this.router.navigate([detailsLink], { relativeTo: route }).then();
      });
  }
}
