import { DestroyRef, Injectable } from '@angular/core';
import { IPlayableCharacter } from '../../../characters/interfaces/table.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ICharacterDetailFormResponse } from '../../../characters/interfaces/api.interfaces';
import { MobsApiService } from '../../api/mobs.api.service';
import {
  IMobDeleteResponse,
  IMobDetailsResponse,
} from '../../interfaces/api.interfaces';
import { IMob } from '../../interfaces/common.inteface';
import { FormGroup } from '@angular/forms';
import { IMobApiForm, IMobFormBuilder } from '../../interfaces/form.interface';
import { MobsFormService } from '../mobs-form/mobs-form.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ICharacterApiForm,
  ICharacterFormBuilder,
} from '../../../characters/interfaces/form.interface';

@Injectable({
  providedIn: 'root',
})
export class MobsService {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private destroyRef: DestroyRef,
    private mobsApiService: MobsApiService,
    private mobsFormService: MobsFormService,
  ) {}

  public createCharacter(
    form: FormGroup<IMobFormBuilder>,
    viewLink: string,
  ): void {
    if (form) {
      const submissionForm: IMobApiForm =
        this.mobsFormService.convertToSend(form);

      this.mobsApiService
        .create(submissionForm)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((): void => {
          this.router.navigate([viewLink], { relativeTo: this.route }).then();
        });
    }
  }

  public getMobsById(id: string, callback: (mob: IMob) => void): void {
    this.mobsApiService
      .getById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: IMobDetailsResponse): void => {
        callback(response.mob);
      });
  }

  public updateCharacter(
    id: string,
    form: FormGroup<IMobFormBuilder>,
    detailsLink: string,
  ): void {
    const submissionForm: IMobApiForm = this.mobsFormService.convertToSend(form);

    this.mobsApiService
      .update(id, submissionForm)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        this.router.navigate([detailsLink], { relativeTo: this.route }).then();
      });
  }
}
