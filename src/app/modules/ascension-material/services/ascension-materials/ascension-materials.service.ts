import { DestroyRef, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { AscensionMaterialsApiService } from "../../api/ascension-materials.api.service";
import { AscensionMaterialsFormService } from "../ascension-materials-form/ascension-materials-form.service";
import { IAscensionMaterialApiForm, IAscensionMaterialFormBuilder } from "../../interfaces/form.interface";
import { IAscensionMaterial } from "../../interfaces/common.inteface";
import { IAscensionMaterialDetailsResponse } from "../../interfaces/api.interfaces";

@Injectable({
  providedIn: 'root'
})
export class AscensionMaterialsService {
  constructor(
    private router: Router,
    private destroyRef: DestroyRef,
    private ascensionMaterialsApiService: AscensionMaterialsApiService,
    private ascensionMaterialsFormService: AscensionMaterialsFormService,
  ) {}

  public createAscensionMaterial(
    form: FormGroup<IAscensionMaterialFormBuilder>,
    viewLink: string,
    route: ActivatedRoute,
  ): void {
    if (form) {
      const submissionForm: IAscensionMaterialApiForm =
        this.ascensionMaterialsFormService.convertToSend(form);

      this.ascensionMaterialsApiService
        .create(submissionForm)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((): void => {
          this.router.navigate([viewLink], { relativeTo: route }).then();
        });
    }
  }

  public getAscensionMaterialById(
    id: string,
    callback: (ascensionMaterial: IAscensionMaterial) => void,
  ): void {
    this.ascensionMaterialsApiService
      .getById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: IAscensionMaterialDetailsResponse): void => {
        callback(response.ascensionMaterial);
      });
  }

  public updateAscensionMaterial(
    id: string,
    form: FormGroup<IAscensionMaterialFormBuilder>,
    detailsLink: string,
    route: ActivatedRoute,
  ): void {
    const submissionForm: IAscensionMaterialApiForm =
      this.ascensionMaterialsFormService.convertToSend(form);

    this.ascensionMaterialsApiService
      .update(id, submissionForm)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        this.router.navigate([detailsLink], { relativeTo: route }).then();
      });
  }
}

