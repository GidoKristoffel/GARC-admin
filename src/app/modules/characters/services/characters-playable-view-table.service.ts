import { Injectable } from '@angular/core';
import { IHeader, IPlayableCharacterResponse } from "../interfaces/table.interface";
import { EHeaderType } from "../../../core/enums/table.enum";

@Injectable({
  providedIn: 'root'
})
export class CharactersPlayableViewTableService {
  private readonly headers: IHeader[] = [
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
      type: EHeaderType.String,
    },
    {
      id: 'elementalType',
      label: 'table.characters.playable.view.element',
      type: EHeaderType.String,
    },
    {
      id: 'region',
      label: 'table.characters.playable.view.region',
      type: EHeaderType.String,
    },
    {
      id: 'bonusAttribute',
      label: 'table.characters.playable.view.bonus-attribute',
      type: EHeaderType.String,
    },
    {
      id: 'weapon',
      label: 'table.characters.playable.view.weapon',
      type: EHeaderType.String,
    },
    {
      id: 'constellation',
      label: 'table.characters.playable.view.constellation',
      type: EHeaderType.TranslateString,
    },
    {
      id: 'arche',
      label: 'table.characters.playable.view.arche',
      type: EHeaderType.Array,
    },
    {
      id: 'birthday',
      label: 'table.characters.playable.view.birthday',
      type: EHeaderType.String,
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
      type: EHeaderType.String,
    },
    {
      id: 'splashArt',
      label: 'table.characters.playable.view.splash-art',
      type: EHeaderType.String,
    },
    {
      id: 'cardIcon',
      label: 'table.characters.playable.view.card-icon',
      type: EHeaderType.String,
    },
    {
      id: 'actions',
      label: 'table.characters.playable.view.actions',
      type: EHeaderType.Action
    },
  ];

  constructor() { }

  public getHeader(): IHeader[] {
    return this.headers;
  }

  public convertTableData(data: IPlayableCharacterResponse): void {
    console.log(data);
  }
}
