import { DestroyRef, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MobsApiService } from '../../api/mobs.api.service';
import { IMobDetailsResponse } from '../../interfaces/api.interfaces';
import { IMob } from '../../interfaces/common.inteface';
import { FormGroup } from '@angular/forms';
import { IMobApiForm, IMobFormBuilder } from '../../interfaces/form.interface';
import { MobsFormService } from '../mobs-form/mobs-form.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MobsService {
  constructor(
    private router: Router,
    private destroyRef: DestroyRef,
    private mobsApiService: MobsApiService,
    private mobsFormService: MobsFormService,
  ) {}

  public createMob(
    form: FormGroup<IMobFormBuilder>,
    viewLink: string,
    route: ActivatedRoute,
  ): void {
    if (form) {
      const submissionForm: IMobApiForm =
        this.mobsFormService.convertToSend(form);

      this.mobsApiService
        .create(submissionForm)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((): void => {
          this.router.navigate([viewLink], { relativeTo: route }).then();
        });
    }
  }

  public getMobById(id: string, callback: (mob: IMob) => void): void {
    this.mobsApiService
      .getById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: IMobDetailsResponse): void => {
        callback(response.mob);
      });
  }

  public updateMob(
    id: string,
    form: FormGroup<IMobFormBuilder>,
    detailsLink: string,
    route: ActivatedRoute,
  ): void {
    const submissionForm: IMobApiForm =
      this.mobsFormService.convertToSend(form);

    this.mobsApiService
      .update(id, submissionForm)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        this.router.navigate([detailsLink], { relativeTo: route }).then();
      });
  }
}
