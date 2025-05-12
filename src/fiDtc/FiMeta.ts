import { FiNumber } from "../fiCore/FiNumber";
import { FiString } from "../fiCore/FiString";
import {IFiMeta} from "./IFiMeta";

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

  public getLnKeyOrMinusOne(): number {
    return FiNumber.orMinusOne(this.fimLnKey);
  }

}
