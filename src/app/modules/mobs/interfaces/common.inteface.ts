import { EMobType } from "../enums/mob-type.enum";

export interface IMob {
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
  type: EMobType;
  icon: string;
}
