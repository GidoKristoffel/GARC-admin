import { DestroyRef, Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { ELocalStorage } from '../../enums/local-storage.enum';
import { ELanguage } from '../../enums/language.enum';
import { isStringInEnum } from '../../utilities/enum.utility';
import { DateFnsConfigurationService } from 'ngx-date-fns';
import { ru, uk, enUS } from 'date-fns/locale';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(
    private translate: TranslateService,
    private translateService: TranslateService,
    private localStorageService: LocalStorageService,
    private dateFnsConfigurationService: DateFnsConfigurationService,
  ) {}

  public init(): void {
    const savedLanguage: string = this.localStorageService.get(
      ELocalStorage.Language,
    );
    const currentLanguage: string = isStringInEnum(savedLanguage, ELanguage)
      ? (savedLanguage as ELanguage)
      : ELanguage.English;
    this.translate.setDefaultLang(currentLanguage);
    this.translate.use(currentLanguage);
    this.dateFnsConfigurationService.setLocale(
      currentLanguage === ELanguage.English
        ? enUS
        : currentLanguage === ELanguage.Ukrainian
          ? uk
          : ru,
    );
  }

  public getCurrentLanguage(): ELanguage {
    return this.translate.currentLang as ELanguage;
  }

  public setLanguage(language: ELanguage): void {
    this.translate.use(language);
    this.dateFnsConfigurationService.setLocale(
      language === ELanguage.English
        ? enUS
        : language === ELanguage.Ukrainian
          ? uk
          : ru,
    );
    this.localStorageService.set(ELocalStorage.Language, language);
  }

  public watchCurrentLanguage(
    callback: (lang: string) => void,
    destroyRef: DestroyRef,
  ): void {
    callback(this.translateService.currentLang);
    this.translateService.onLangChange
      .pipe(takeUntilDestroyed(destroyRef))
      .subscribe((event: LangChangeEvent): void => {
        callback(event.lang);
      });
  }
}
