import { DestroyRef } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';
import { EPage } from '../../enums/page.enum';
import { EBtnType } from '../../enums/btn-type.enum';
import { ActivatedRoute } from '@angular/router';
import { EFormType } from "../../enums/form.enum";
import { IFormMetadata } from "../../../shared/interfaces/form.interface";

export abstract class SharedEdit<T> {
  public readonly saveBtnType: EBtnType = EBtnType.Submit;
  public readonly fieldType: typeof EFormType = EFormType;

  public form!: T;
  public metadata: IFormMetadata[] = [];
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
  protected abstract save(): void;

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

  protected initMetadata(metadata: IFormMetadata[]): void {
    this.metadata = metadata;
  }
}
