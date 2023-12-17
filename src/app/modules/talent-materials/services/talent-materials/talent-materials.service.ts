import { DestroyRef, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TalentMaterialsApiService } from '../../api/talent-materials.api.service';
import { TalentMaterialsFormService } from '../talent-materials-form/talent-materials-form.service';
import {
  ITalentMaterialApiForm,
  ITalentMaterialFormBuilder,
} from '../../interfaces/form.interface';
import { ITalentMaterial } from '../../interfaces/common.inteface';
import { ITalentMaterialDetailsResponse } from '../../interfaces/api.interfaces';

@Injectable({
  providedIn: 'root',
})
export class TalentMaterialsService {
  constructor(
    private router: Router,
    private destroyRef: DestroyRef,
    private talentMaterialsApiService: TalentMaterialsApiService,
    private talentMaterialsFormService: TalentMaterialsFormService,
  ) {}

  public createTalentMaterial(
    form: FormGroup<ITalentMaterialFormBuilder>,
    viewLink: string,
    route: ActivatedRoute,
  ): void {
    if (form) {
      const submissionForm: ITalentMaterialApiForm =
        this.talentMaterialsFormService.convertToSend(form);

      this.talentMaterialsApiService
        .create(submissionForm)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((): void => {
          this.router.navigate([viewLink], { relativeTo: route }).then();
        });
    }
  }

  public getTalentMaterialById(
    id: string,
    callback: (talentMaterial: ITalentMaterial) => void,
  ): void {
    this.talentMaterialsApiService
      .getById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: ITalentMaterialDetailsResponse): void => {
        callback(response.talentMaterial);
      });
  }

  public updateTalentMaterial(
    id: string,
    form: FormGroup<ITalentMaterialFormBuilder>,
    detailsLink: string,
    route: ActivatedRoute,
  ): void {
    const submissionForm: ITalentMaterialApiForm =
      this.talentMaterialsFormService.convertToSend(form);

    this.talentMaterialsApiService
      .update(id, submissionForm)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        this.router.navigate([detailsLink], { relativeTo: route }).then();
      });
  }
}
