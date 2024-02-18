import { EFormType } from "../../core/enums/form.enum";
import { ELanguage } from "../../core/enums/language.enum";
import { FormControl } from "@angular/forms";

export interface IFormMetadata {
  fieldName: string;
  label: string;
  type: EFormType;
  option: string;
  language: ELanguage | string,
  valueTranslateKey: string,
  checkboxes: string[]
}

export interface IParsePageFormBuilder {
  pageUrl: FormControl<string | null>
}
