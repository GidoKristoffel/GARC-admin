import { DestroyRef, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { WeeklyBossesApiService } from "../../api/weekly-bosses.api.service";
import { WeeklyBossesFormService } from "../weekly-bosses-form/weekly-bosses-form.service";
import { IWeeklyBossApiForm, IWeeklyBossFormBuilder } from "../../interfaces/form.interface";
import { IWeeklyBoss } from "../../interfaces/common.inteface";
import { IWeeklyBossDetailsResponse } from "../../interfaces/api.interfaces";

@Injectable({
  providedIn: 'root'
})
export class WeeklyBossesService {
  constructor(
    private router: Router,
    private destroyRef: DestroyRef,
    private weeklyBossesApiService: WeeklyBossesApiService,
    private weeklyBossesFormService: WeeklyBossesFormService,
  ) {}

  public createWeeklyBoss(
    form: FormGroup<IWeeklyBossFormBuilder>,
    viewLink: string,
    route: ActivatedRoute,
  ): void {
    if (form) {
      const submissionForm: IWeeklyBossApiForm =
        this.weeklyBossesFormService.convertToSend(form);

      this.weeklyBossesApiService
        .create(submissionForm)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((): void => {
          this.router.navigate([viewLink], { relativeTo: route }).then();
        });
    }
  }

  public getWeeklyBossById(id: string, callback: (weeklyBoss: IWeeklyBoss) => void): void {
    this.weeklyBossesApiService
      .getById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: IWeeklyBossDetailsResponse): void => {
        callback(response.weeklyBoss);
      });
  }

  public updateWeeklyBoss(
    id: string,
    form: FormGroup<IWeeklyBossFormBuilder>,
    detailsLink: string,
    route: ActivatedRoute,
  ): void {
    const submissionForm: IWeeklyBossApiForm =
      this.weeklyBossesFormService.convertToSend(form);

    this.weeklyBossesApiService
      .update(id, submissionForm)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        this.router.navigate([detailsLink], { relativeTo: route }).then();
      });
  }
}
