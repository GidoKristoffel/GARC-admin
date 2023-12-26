export interface IOption {
  label: string;
  value: string;
}

export interface IOptions {
  [key: string]: IOption[];
}

export interface ICheckboxChange {
  checked: boolean;
  value: string;
}
