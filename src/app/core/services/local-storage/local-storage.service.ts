import { Injectable } from '@angular/core';
import { ELocalStorage } from "../../enums/local-storage.enum";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public get(key: ELocalStorage): string {
    return localStorage.getItem(key) || '';
  }

  public set(key: ELocalStorage, value: any): void {
    localStorage.setItem(key, value);
  }

  public remove(key: ELocalStorage): void {
    localStorage.removeItem(key);
  }
}
