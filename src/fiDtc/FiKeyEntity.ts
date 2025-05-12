export class FiKeyEntity<T> {
    mapData: Map<string,T> = new Map();

    public fiPut(txKey:string,value:T):FiKeyEntity<T> {
        this.mapData.set(txKey,value);
        return this;
    }

    // public fiGetAsStringNtn(txKey:string| undefined):string {
    //     if(txKey == undefined) return "";
    //     if(this.mapData.has(txKey) && this.mapData.has(txKey)!=null) return this.mapData.get(txKey).toString();
    //     return "";
    // }

    public fiGet(txKey:string| undefined):any {
        if(txKey == undefined) return undefined;
        return this.mapData.get(txKey);
    }

    constructor() {
    }
}
