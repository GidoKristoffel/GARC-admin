import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EPage } from "../../enums/page.enum";
import { IFormMetadata, IParsePageFormBuilder } from "../../../shared/interfaces/form.interface";
import { EventService } from "../../services/event/event.service";

export abstract class SharedCreate<T> {
  public readonly viewLink: string = '../' + EPage.View;

  public form!: T;
  public parsePageForm!: FormGroup<IParsePageFormBuilder>;
  public metadata: IFormMetadata[] = [];
  public loading: boolean = false;

  protected constructor(protected formBuilder: FormBuilder) {}

  protected abstract initCashing(): void;

  protected abstract loadCachedData(): void;

  protected initMetadata(metadata: IFormMetadata[]): void {
    this.metadata = metadata;
  }

  protected initParsePageForm(): void {
    this.parsePageForm = this.formBuilder.group({
      pageUrl: ['', [Validators.required]],
    });
  }

  protected startLoading(): void {
    this.loading = true;
  }

  protected finishLoading(): void {
    this.loading = false;
  }
}
