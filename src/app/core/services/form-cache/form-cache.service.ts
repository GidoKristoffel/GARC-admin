import { Injectable } from '@angular/core';
import { ELocalStorage } from "../../enums/local-storage.enum";

@Injectable({
  providedIn: 'root'
})
export class FormCacheService {
  saveFormData(data: any): void {
    localStorage.setItem(ELocalStorage.CharacterFormCreate, JSON.stringify(data));
  }

  loadFormData(): any {
    const cachedData = localStorage.getItem(ELocalStorage.CharacterFormCreate);
    return cachedData ? JSON.parse(cachedData) : null;
  }

  clearFormData(): void {
    localStorage.removeItem(ELocalStorage.CharacterFormCreate);
  }
}
