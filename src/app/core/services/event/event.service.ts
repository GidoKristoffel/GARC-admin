import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public readonly dataAutocomplete: EventEmitter<void> = new EventEmitter();

  constructor() { }
}
