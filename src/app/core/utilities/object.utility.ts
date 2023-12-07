export function isObjectInArray(
  obj: Record<string, any>,
  arr: Array<Record<string, any>>,
): boolean {
  return arr.some((item: Record<string, any>) =>
    Object.keys(obj).every((key: string): boolean => obj[key] === item[key]),
  );
}
