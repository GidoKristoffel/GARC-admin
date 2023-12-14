import { EEnemyType } from "../../../core/enums/enemy-type.enum";

export interface IEliteBoss {
  id: string;
  name: {
    en: string;
    ua: string;
    ru: string;
  };
  description: {
    en: string;
    ua: string;
    ru: string;
  };
  type: EEnemyType;
  icon: string;

  [key: string]: any;
}
