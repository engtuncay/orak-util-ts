export class FiString {
  public static orEmpty(value: string | undefined): string {
    if (value == undefined) return "";
    return value;
  }
}
