import { FormBuilder } from '@angular/forms';
import { EBtnType } from "../../enums/btn-type.enum";
import { EPage } from "../../enums/page.enum";

export abstract class SharedCreate<T> {
  public readonly btnType: EBtnType = EBtnType.Submit;
  public readonly viewLink: string = '../' + EPage.View;
  protected readonly translateKey: string = 'page.characters.playable.create.';

  public form!: T;

  protected constructor(protected formBuilder: FormBuilder) {}

  protected abstract initCashing(): void;

  protected abstract loadCachedData(): void;
}
