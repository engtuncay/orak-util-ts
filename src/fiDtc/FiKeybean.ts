import { FimFiCol } from "../fiMeta/FimFiCol";
import { FiMeta } from "./FiMeta";

export class FiKeybean {
  mapData: Map<string, any> = new Map();

  public fiPut(txKey: string, value: any): FiKeybean {
    this.mapData.set(txKey, value);
    return this;
  }

  public fiGetAsStringNtn(txKey: string | undefined): string {
    if (txKey == undefined) return "";
    if (this.mapData.has(txKey)) return this.mapData.get(txKey).toString();
    return "";
  }

  public getAsStringNtn(txKey: string | undefined): string {
    if (txKey == undefined) return "";
    if (this.mapData.has(txKey)) return this.mapData.get(txKey).toString();
    return "";
  }

  public fiGet(txKey: string | undefined): any {
    if (txKey == undefined) return undefined;
    return this.mapData.get(txKey);
  }


  public getAsObject(): Record<string, any> {

    const obj: Record<string, any> = {};

    for (const [k, v] of this.mapData.entries()) {
      obj[k] = v;
    }

    return obj;
  }


  constructor() {
  }

  public addFieldByFiMeta(fiMeta: FiMeta, txValue: string):void {
    this.fiPut(fiMeta.getTxKeyNtn(), txValue);
  }

  public getFieldName(): string {
    return this.fiGetAsStringNtn(FimFiCol.ofcTxFieldName().fimTxKey);
  }

}
