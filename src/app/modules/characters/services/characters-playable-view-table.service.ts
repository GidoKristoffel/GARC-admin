import { Injectable } from '@angular/core';
import { IPlayableCharacterResponse } from "../interfaces/table.interface";

@Injectable({
  providedIn: 'root'
})
export class CharactersPlayableViewTableService {
  private readonly headers: { id: string, label: string }[] = [
    {
      id: 'id',
      label: 'table.characters.playable.view.id'
    },
    {
      id: 'name',
      label: 'table.characters.playable.view.name'
    },
    {
      id: 'quality',
      label: 'table.characters.playable.view.quality'
    },
    {
      id: 'elementalType',
      label: 'table.characters.playable.view.element'
    },
    {
      id: 'region',
      label: 'table.characters.playable.view.region'
    },
    {
      id: 'bonusAttribute',
      label: 'table.characters.playable.view.bonus-attribute'
    },
    {
      id: 'weapon',
      label: 'table.characters.playable.view.weapon'
    },
    {
      id: 'constellation',
      label: 'table.characters.playable.view.constellation'
    },
    {
      id: 'arche',
      label: 'table.characters.playable.view.arche'
    },
    {
      id: 'birthday',
      label: 'table.characters.playable.view.birthday'
    },
    {
      id: 'title',
      label: 'table.characters.playable.view.title'
    },
    {
      id: 'affiliation',
      label: 'table.characters.playable.view.affiliation'
    },
    {
      id: 'icon',
      label: 'table.characters.playable.view.icon'
    },
    {
      id: 'splashArt',
      label: 'table.characters.playable.view.splash-art'
    },
    {
      id: 'cardIcon',
      label: 'table.characters.playable.view.card-icon'
    },
    {
      id: 'actions',
      label: 'table.characters.playable.view.actions'
    },
  ];

  constructor() { }

  public getHeader(): { id: string, label: string }[] {
    return this.headers;
  }

  public convertTableData(data: IPlayableCharacterResponse): void {
    console.log(data);
  }
}
