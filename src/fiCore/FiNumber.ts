export class FiNumber {
  public static orZero(value: number | undefined): number {
    if (value == undefined) return 0;
    return value;
  }

  public static orMinusOne(value: number | undefined): number {
    if (value == undefined) return -1;
    return value;
  }
}
