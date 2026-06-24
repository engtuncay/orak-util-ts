import {FimFiCol} from "../fiMeta/FimFiCol";
import {FiMeta} from "./FiMeta";

/**
 * put ile Col objesi ile birlikte eklenir
 *
 * add ile Col objesiz eklenir
 */
export class Fks {
    mapData: Map<string, string> = new Map();

    public fiPut(txKey: string, value: string): Fks {
        this.mapData.set(txKey, value);
        return this;
    }

    public add(txKey: string, value: string): Fks {
        this.mapData.set(txKey, value);
        return this;
    }

    public fiGetAsStringNtn(txKey: string | undefined): string {
        if (txKey == undefined) return "";
        if (this.mapData.has(txKey)) return this.mapData.get(txKey) || "";
        return "";
    }

    public getAsStringNtn(txKey: string | undefined): string {
        if (txKey == undefined) return "";
        if (this.mapData.has(txKey)) return this.mapData.get(txKey) || "";
        return "";
    }

    public fiGet(txKey: string | undefined): string | undefined {
        if (txKey == undefined) return undefined;
        return this.mapData.get(txKey);
    }

    public getAsObject(): Record<string, string> {

        const obj: Record<string, string> = {};

        for (const [k, v] of this.mapData.entries()) {
            obj[k] = v;
        }

        return obj;
    }


    constructor() {
    }

    public addFieldByFiMeta(fiMeta: FiMeta, txValue: string): void {
        this.fiPut(fiMeta.getTxKeyNtn(), txValue);
    }

    public addFim(fiMeta: FiMeta, txValue: string): void {
        if (fiMeta?.fimTxKey == undefined) return;
        this.add(fiMeta.getTxKeyNtn(), txValue);
    }

    /**
     * addFieldByFiMeta shortcut method
     *
     * @param fiMeta
     * @param txValue
     */
    public addFieldByFm(fiMeta: FiMeta, txValue: string): void {
        this.addFieldByFiMeta(fiMeta, txValue);
    }

    public getFieldName(): string {
        return this.fiGetAsStringNtn(FimFiCol.fcTxFieldName().fimTxKey);
    }

    public isNumber(): boolean {
        const fieldType = this.fiGetAsStringNtn(FimFiCol.fcTxFieldType().fimTxKey).toLowerCase();
        return fieldType === "number" || fieldType === "float" || fieldType === "double" || fieldType === "int";
    }

}
