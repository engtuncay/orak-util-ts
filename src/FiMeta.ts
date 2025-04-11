import { FiNumber } from "./core/FiNumber";
import { FiString } from "./core/FiString";
import {IFiMeta} from "./fimeta/IFiMeta";

export class FiMeta implements IFiMeta {
  fimTxKey?: string;
  fimTxValue?: string;
  fimLnKey?: number;

  // Getters

  public getTxKeyNtn(): string {
    return FiString.orEmpty(this.fimTxKey);
  }

  public getTxValueNtn(): string {
    return FiString.orEmpty(this.fimTxValue);
  }

  public getLnKeyOrMinusOne(): number | undefined {
    return FiNumber.orMinusOne(this.fimLnKey);
  }

}
