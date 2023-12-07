import { ComponentRef, DestroyRef, Injectable } from '@angular/core';
import { TDialogs } from '../../types/dialog.type';
import { ModalService } from '../modal/modal.service';
import { dialogs } from '../../constants/dialog.constant';
import { EDialog } from '../../enums/dialog.enum';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private readonly params: TDialogs = dialogs;

  constructor(
    private modal: ModalService,
    private destroyRef: DestroyRef,
  ) {}

  public openCharacterDelete(agree: () => void): void {
    const dialogRef: ComponentRef<DialogComponent> =
      this.modal.open(DialogComponent);
    const instance: DialogComponent = dialogRef.instance;

    instance.answer = this.params[EDialog.CharacterDelete].answer;
    instance.agreeLabel = this.params[EDialog.CharacterDelete].agreeLabel;
    instance.disagreeLabel = this.params[EDialog.CharacterDelete].disagreeLabel;

    instance.agree
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        agree();
        this.modal.close(dialogRef);
      });
    instance.disagree
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.modal.close(dialogRef));
  }
}
