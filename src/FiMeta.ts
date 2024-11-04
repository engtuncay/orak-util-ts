import { FiNumber } from "./core/FiNumber";
import { FiString } from "./core/FiString";

export class FiMeta {
  txKey?: string;
  txValue?: string;
  lnKey?: number;

  // Getters

  public getTxKeyNtn(): string {
    return FiString.orEmpty(this.txKey);
  }

  public getTxValueNtn(): string {
    return FiString.orEmpty(this.txValue);
  }

  public getLnKeyOrMinusOne(): number | undefined {
    return FiNumber.orMinusOne(this.lnKey);
  }
}
