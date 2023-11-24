export function getEnumKeys(enumObj: any): string[] {
  return Object.keys(enumObj).filter(key => isNaN(Number(enumObj[key])));
}

export function getEnumValues<T extends Record<string, string | number>>(enumObj: T): Array<T[keyof T]> {
  return Object.values(enumObj) as Array<T[keyof T]>;
}

export function isStringInEnum(value: string, enumObj: Record<string, string | number>): boolean {
  return Object.values(enumObj).some(enumValue => enumValue === value);
}
