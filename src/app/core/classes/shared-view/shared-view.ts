import { EPage } from "../../enums/page.enum";
import { ITableMetadata } from "../../../shared/interfaces/table.interface";
import { LanguageService } from "../../services/language/language.service";
import { DestroyRef } from "@angular/core";

export class SharedView {
  public readonly createItemLink: string = '../' + EPage.Create;
  public metadata: ITableMetadata[] = [];
  public currentLang: string = '';

  constructor(
    protected destroyRef: DestroyRef,
    protected languageService: LanguageService
  ) {}

  protected initMetadata(getMetadata: () => ITableMetadata[]): void {
    this.metadata = getMetadata();
  }

  protected initLanguage(): void {
    this.languageService.watchCurrentLanguage((lang: string) => (this.currentLang = lang), this.destroyRef);
  }
}
