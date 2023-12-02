export function convertToUpperDashFormat(value: string): string {
  return value.toUpperCase().replace(/-/g, '_');
}
