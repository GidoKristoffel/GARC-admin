import { TDialogs } from '../types/dialog.type';
import { EDialog } from '../enums/dialog.enum';

export const dialogs: TDialogs = {
  [EDialog.CharacterDelete]: {
    answer: 'dialog.' + EDialog.CharacterDelete,
    agreeLabel: 'shared.btn.yes',
    disagreeLabel: 'shared.btn.no',
  },
};
