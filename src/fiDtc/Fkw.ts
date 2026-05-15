import {FiMeta} from "./FiMeta";
import {Fkb} from "./Fkb";

/**
 * FiKeybean Wrapper Like Class
 */
export class Fkw {

    objVal: Record<string, any>;

    constructor(objVal: Record<string, any>) {
        this.objVal = objVal;
    }

    getFimVal(fim: FiMeta) {
        return this.objVal[fim.getTxKeyNtn()];
    }

    getFkcVal(fkb: Fkb) {
        return this.objVal[fkb.getFieldName()];
    }


}