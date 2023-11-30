import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IOption } from "../../../../shared/interfaces/input.interface";
import { LanguageService } from "../../../../core/services/language/language.service";
import { ELanguage } from "../../../../core/enums/language.enum";
import { getEnumValues, isStringInEnum } from "../../../../core/utilities/enum.utility";
import { DefaultSelectComponent } from "../../../../shared/components/select/default-select/default-select.component";

@Component({
  selector: 'clt-language-picker',
  standalone: true,
  imports: [CommonModule, DefaultSelectComponent],
  templateUrl: './language-picker.component.html',
  styleUrl: './language-picker.component.scss'
})
export class LanguagePickerComponent implements OnInit {
  public languages: IOption[] = [];
  public selected!: string;
  public readonly iconSvg: string = './assets/images/icons/language.svg';

  constructor(
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.initCurrentLanguage();
    this.initLanguages();
  }

  private initCurrentLanguage(): void {
    this.selected = 'language.' + this.languageService.getCurrentLanguage();
  }

  private initLanguages(): void {
    this.languages =
      getEnumValues(ELanguage)
        .map((language: ELanguage[keyof ELanguage]): IOption => {
          return {
            label: 'language.' + language,
            value: String(language)
          }
        });
  }

  public setLanguage(language: string): void {
    if (isStringInEnum(language, ELanguage)) {
      this.languageService.setLanguage(language as ELanguage);
    }
  }
}
