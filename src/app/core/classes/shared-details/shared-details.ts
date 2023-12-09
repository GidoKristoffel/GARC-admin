import { ELanguage } from '../../enums/language.enum';
import { LanguageService } from '../../services/language/language.service';
import { DestroyRef } from '@angular/core';
import { EPage } from "../../enums/page.enum";
import { EFormType } from "../../enums/form.enum";
import { IFormMetadata } from "../../../shared/interfaces/form.interface";
import { ActivatedRoute } from "@angular/router";

export abstract class SharedDetails {
  public readonly viewLink: string = '../../' + EPage.View;
  public readonly fieldType: typeof EFormType = EFormType;

  public metadata: IFormMetadata[] = [];
  public editLink: string = '../../' + EPage.Edit;
  public currentLang: string = ELanguage.English;
  public id: string | null = '';

  protected constructor(
    protected route: ActivatedRoute,
    protected destroyRef: DestroyRef,
    protected languageService: LanguageService,
  ) {}

  protected abstract initTableData(id: string): void;

  protected initLanguage(): void {
    this.languageService.watchCurrentLanguage(
      (lang: string) => (this.currentLang = lang),
      this.destroyRef,
    );
  }

  protected initMetadata(metadata: IFormMetadata[]): void {
    this.metadata = metadata;
  }

  protected initRoute(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (typeof this.id === 'string') {
      this.editLink += EPage.ParamId.replace(':id', this.id);
      this.initTableData(this.id);
    }
  }
}
