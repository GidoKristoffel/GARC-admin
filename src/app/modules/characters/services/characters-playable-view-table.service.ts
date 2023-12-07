import { Injectable } from '@angular/core';
import { IPlayableCharacter } from '../interfaces/table.interface';
import { EHeaderType } from '../../../core/enums/table.enum';
import { ITableMetadata } from '../../../shared/interfaces/table.interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersPlayableViewTableService {
  private readonly headers: ITableMetadata[] = [
    {
      id: 'id',
      label: 'table.characters.playable.view.id',
      type: EHeaderType.Id,
    },
    {
      id: 'name',
      label: 'table.characters.playable.view.name',
      type: EHeaderType.TranslateString,
    },
    {
      id: 'quality',
      label: 'table.characters.playable.view.quality',
      type: EHeaderType.Quality,
    },
    {
      id: 'elementalType',
      label: 'table.characters.playable.view.element',
      type: EHeaderType.Element,
    },
    {
      id: 'region',
      label: 'table.characters.playable.view.region',
      type: EHeaderType.Region,
    },
    {
      id: 'bonusAttribute',
      label: 'table.characters.playable.view.bonus-attribute',
      type: EHeaderType.BonusAttribute,
    },
    {
      id: 'weapon',
      label: 'table.characters.playable.view.weapon',
      type: EHeaderType.Weapon,
    },
    {
      id: 'constellation',
      label: 'table.characters.playable.view.constellation',
      type: EHeaderType.TranslateString,
    },
    {
      id: 'arche',
      label: 'table.characters.playable.view.arche',
      type: EHeaderType.Arche,
    },
    {
      id: 'birthday',
      label: 'table.characters.playable.view.birthday',
      type: EHeaderType.Date,
    },
    {
      id: 'title',
      label: 'table.characters.playable.view.title',
      type: EHeaderType.TranslateString,
    },
    {
      id: 'affiliation',
      label: 'table.characters.playable.view.affiliation',
      type: EHeaderType.TranslateString,
    },
    {
      id: 'icon',
      label: 'table.characters.playable.view.icon',
      type: EHeaderType.Link,
    },
    {
      id: 'splashArt',
      label: 'table.characters.playable.view.splash-art',
      type: EHeaderType.Link,
    },
    {
      id: 'cardIcon',
      label: 'table.characters.playable.view.card-icon',
      type: EHeaderType.Link,
    },
    {
      id: 'actions',
      label: 'table.characters.playable.view.actions',
      type: EHeaderType.Action,
    },
  ];

  constructor() {}

  public getHeader(): ITableMetadata[] {
    return this.headers;
  }

  public convertTableData(data: IPlayableCharacter): IPlayableCharacter {
    data.birthday = new Date(data.birthday);
    return data;
  }
}
