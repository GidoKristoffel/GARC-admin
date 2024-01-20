import { DestroyRef, Injectable } from '@angular/core';
import { IPlayableCharacter } from '../../interfaces/table.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ICharacterViewFormResponse } from '../../interfaces/api.interfaces';
import { CharactersApiService } from '../../api/characters.api.service';

@Injectable({
  providedIn: 'root',
})
export class CharactersPlayableViewTableService {
  constructor(
    private destroyRef: DestroyRef,
    private charactersApiService: CharactersApiService,
  ) {}

  public convertTableData(data: IPlayableCharacter): IPlayableCharacter {
    data.birthday = new Date(data.birthday);
    return data;
  }

  public getCharacters(
    callback: (characters: IPlayableCharacter[]) => void,
  ): void {
    this.charactersApiService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response: ICharacterViewFormResponse): void => {
        const characters: IPlayableCharacter[] = response.character.map(
          (character: IPlayableCharacter) => this.convertTableData(character),
        );
        callback(characters);
      });
  }

  public deleteCharacter(id: string, callback: () => void): void {
    this.charactersApiService
      .delete(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        callback()
      });
  }
}
