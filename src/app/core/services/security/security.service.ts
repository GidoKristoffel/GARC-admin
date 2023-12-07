import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { ELocalStorage } from '../../enums/local-storage.enum';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  constructor(private localStorageService: LocalStorageService) {}

  public getAuthToken(): string {
    return '';
  }

  public isAuthenticated(): boolean {
    return !!this.localStorageService.get(ELocalStorage.Token);
  }
}
