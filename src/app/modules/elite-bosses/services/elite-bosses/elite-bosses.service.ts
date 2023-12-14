import { DestroyRef, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { EliteBossesApiService } from "../../api/elite-bosses.api.service";
import { EliteBossesFormService } from "../elite-bosses-form/elite-bosses-form.service";
import { IEliteBossApiForm, IEliteBossFormBuilder } from "../../interfaces/form.interface";
import { IEliteBoss } from "../../interfaces/common.inteface";
import { IEliteBossDetailsResponse } from "../../interfaces/api.interfaces";

@Injectable({
  providedIn: 'root'
})
export class EliteBossesService {
  constructor(
    private router: Router,
    private destroyRef: DestroyRef,
    private eliteBossesApiService: EliteBossesApiService,
    private eliteBossesFormService: EliteBossesFormService,
  ) {}

  public createEliteBoss(
    form: FormGroup<IEliteBossFormBuilder>,
    viewLink: string,
    route: ActivatedRoute,
  ): void {
    if (form) {
      const submissionForm: IEliteBossApiForm =
        this.eliteBossesFormService.convertToSend(form);

      this.eliteBossesApiService
        .create(submissionForm)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((): void => {
          this.router.navigate([viewLink], { relativeTo: route }).then();
        });
    }
  }

  public getEliteBossById(id: string, callback: (eliteBoss: IEliteBoss) => void): void {
    this.eliteBossesApiService
      .getById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: IEliteBossDetailsResponse): void => {
        callback(response.eliteBoss);
      });
  }

  public updateEliteBoss(
    id: string,
    form: FormGroup<IEliteBossFormBuilder>,
    detailsLink: string,
    route: ActivatedRoute,
  ): void {
    const submissionForm: IEliteBossApiForm =
      this.eliteBossesFormService.convertToSend(form);

    this.eliteBossesApiService
      .update(id, submissionForm)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        this.router.navigate([detailsLink], { relativeTo: route }).then();
      });
  }
}
