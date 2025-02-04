export class FiKeybean {
  mapData: Map<string,any> = new Map();

  public fiPut(txKey:string,value:any):FiKeybean {
    this.mapData.set(txKey,value);
    return this;
  }

  public fiGetAsStringNtn(txKey:string| undefined):string {
    if(txKey == undefined) return "";
    if(this.mapData.has(txKey)) return this.mapData.get(txKey).toString();
    return "";
  }

  public fiGet(txKey:string| undefined):any {
    if(txKey == undefined) return undefined;
    return this.mapData.get(txKey);
  }

  constructor() {
  }
}
