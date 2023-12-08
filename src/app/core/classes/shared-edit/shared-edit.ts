import { DestroyRef } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';
import { EPage } from "../../enums/page.enum";
import { EBtnType } from "../../enums/btn-type.enum";
import { ActivatedRoute } from "@angular/router";
import { ITableExtendedMetadata } from "../../../shared/interfaces/table.interface";
import { EHeaderType } from "../../enums/table.enum";

export abstract class SharedEdit<T> {
  public readonly btnType: EBtnType = EBtnType.Submit;
  public metadata: ITableExtendedMetadata[] = [];
  public fieldType: typeof EHeaderType = EHeaderType;

  public form!: T;
  public currentLang: string = '';
  public detailsLink: string = '../../' + EPage.Details;
  public id: string | null = '';
  public loaded: boolean = false;

  protected constructor(
    protected route: ActivatedRoute,
    protected destroyRef: DestroyRef,
    protected languageService: LanguageService,
  ) {}

  protected abstract initForm(): void;
  protected abstract initMetadata(): void;

  protected initLanguage(): void {
    this.languageService.watchCurrentLanguage(
      (lang: string) => (this.currentLang = lang),
      this.destroyRef,
    );
  }

  protected initRoute(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (typeof this.id === 'string') {
      this.detailsLink += EPage.ParamId.replace(':id', this.id);
    }
  }
}
