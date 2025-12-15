import { FiMeta } from "./FiMeta";

export class FiObject {
  refValue: Record<string, any>;

  constructor(refValue?: Record<string, any>) {
    this.refValue = refValue || {};
  }

  getValueByFiMeta(fiMeta: FiMeta): any {

    if (fiMeta == undefined || fiMeta == null || fiMeta.fimTxKey == undefined) {
      return null;
    }

    return this.refValue[fiMeta.getTxKeyNtn()];
  }



}