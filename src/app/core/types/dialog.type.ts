import { EDialog } from '../enums/dialog.enum';
import { IDialog } from '../../shared/interfaces/dialog.interface';

export type TDialogs = {
  [key in EDialog]: IDialog;
};
