export class FiKeybean {
  mapData: Map<string,any> = new Map();

  public fiPut(txKey:string,value:any):FiKeybean {
    this.mapData.set(txKey,value);
    return this;
  }

  constructor() {
  }
}
