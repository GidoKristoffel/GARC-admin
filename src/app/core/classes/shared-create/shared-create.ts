import { FormBuilder } from '@angular/forms';
import { EBtnType } from "../../enums/btn-type.enum";
import { EPage } from "../../enums/page.enum";
import { IFormMetadata } from "../../../shared/interfaces/form.interface";
import { EFormType } from "../../enums/form.enum";

export abstract class SharedCreate<T> {
  public readonly viewLink: string = '../' + EPage.View;
  public readonly fieldType: typeof EFormType = EFormType;

  public form!: T;
  public metadata: IFormMetadata[] = [];

  protected constructor(protected formBuilder: FormBuilder) {}

  protected abstract initCashing(): void;

  protected abstract loadCachedData(): void;

  protected initMetadata(metadata: IFormMetadata[]): void {
    this.metadata = metadata;
  }
}
