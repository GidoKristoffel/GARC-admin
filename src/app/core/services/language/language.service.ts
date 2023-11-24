import { Injectable } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { LocalStorageService } from "../local-storage/local-storage.service";
import { ELocalStorage } from "../../enums/local-storage.enum";
import { ELanguage } from "../../enums/language.enum";
import { isStringInEnum } from "../../utilities/enum.utility";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(
    private translate: TranslateService,
    private localStorageService: LocalStorageService
  ) {}

  public init(): void {
    const savedLanguage: string = this.localStorageService.get(ELocalStorage.Language);
    const currentLanguage: string = isStringInEnum(savedLanguage, ELanguage) ? (savedLanguage as ELanguage) : ELanguage.English;
    this.translate.setDefaultLang(currentLanguage);
    this.translate.use(currentLanguage);
  }

  public getCurrentLanguage(): ELanguage {
    return this.translate.currentLang as ELanguage;
  }

  public setLanguage(language: ELanguage): void {
    this.translate.use(language);
    this.localStorageService.set(ELocalStorage.Language, language);
  }
}
