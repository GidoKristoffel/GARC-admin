import { DestroyRef, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ICharacterDetailFormResponse } from '../../interfaces/api.interfaces';
import { IPlayableCharacter } from '../../interfaces/table.interface';
import { CharactersApiService } from '../../api/characters.api.service';
import { FormGroup } from '@angular/forms';
import {
  ICharacterApiForm,
  ICharacterFormBuilder,
} from '../../interfaces/form.interface';
import { CharactersPlayableFormService } from '../characters-playable-form/characters-playable-form.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CharactersPlayableService {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private destroyRef: DestroyRef,
    private charactersApiService: CharactersApiService,
    private charactersPlayableFormService: CharactersPlayableFormService,
  ) {}

  public getCharacterById(
    id: string,
    callback: (character: IPlayableCharacter) => void,
  ): void {
    this.charactersApiService
      .getById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: ICharacterDetailFormResponse): void => {
        callback(response.character);
      });
  }

  public updateCharacter(
    id: string,
    form: FormGroup<ICharacterFormBuilder>,
    detailsLink: string,
  ): void {
    this.charactersPlayableFormService.convertToSend(form);
    const submissionForm: ICharacterApiForm =
      this.charactersPlayableFormService.convertToSend(form);

    this.charactersApiService
      .update(id, submissionForm)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        this.router.navigate([detailsLink], { relativeTo: this.route }).then();
      });
  }

  public createCharacter(form: FormGroup<ICharacterFormBuilder>, viewLink: string): void {
    if (form) {
      const submissionForm: ICharacterApiForm = this.charactersPlayableFormService.convertToSend(form);

      this.charactersApiService
        .create(submissionForm)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((): void => {
          this.router.navigate([viewLink], { relativeTo: this.route }).then();
        });
    }
  }
}
