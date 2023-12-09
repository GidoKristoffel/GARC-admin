import { EFormType } from "../../core/enums/form.enum";
import { ELanguage } from "../../core/enums/language.enum";

export interface IFormMetadata {
  fieldName: string;
  label: string;
  type: EFormType;
  option: string;
  language: ELanguage | string,
  valueTranslateKey: string,
  checkboxes: string[]
}
