import { FiMeta } from "./FiMeta";
import { Fkb } from './Fkb';

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

  getValueByFkb(fkb: Fkb): any {

    if (fkb == undefined || fkb == null || fkb.getFieldName() == undefined) {
      return null;
    }

    return this.refValue[fkb.getFieldName()];
  }



}