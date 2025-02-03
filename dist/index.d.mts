declare class FiString {
    static orEmpty(value: string | undefined): string;
}

declare class FiNumber {
    static orZero(value: number | undefined): number;
    static orMinusOne(value: number | undefined): number;
}

declare class FiMeta {
    txKey?: string;
    txValue?: string;
    lnKey?: number;
    getTxKeyNtn(): string;
    getTxValueNtn(): string;
    getLnKeyOrMinusOne(): number | undefined;
}

declare class OreLog {
    orlTxMessage?: string;
    orlTxLogType?: string;
}

declare class Fdr {
    boResult?: boolean;
    message?: string;
    value?: object;
    lnResponseCode?: number;
    txId?: string;
    txName?: string;
    logList?: Array<OreLog>;
    rowsAffected?: number;
    lnTotalCount?: number;
    boFalseExist?: boolean;
    listException?: Array<object>;
    lnStatus?: number;
    getLogListNtn(): Array<OreLog>;
}

declare class FiCol {
    ofcTxFieldName?: string;
    ofcTxHeader?: string;
    txLabel?: string;
    ofcTxDbFieldName?: string;
    txGuid?: string;
    ofiTxIdType?: string;
    ofcBoUniqGro1?: boolean;
    ofcBoNullable?: boolean;
    ofcBoUnique?: boolean;
    ofcBoUtfSupport?: boolean;
    ofcTxDefValue?: string;
    ofcTxCollation?: string;
    ofcTxTypeName?: string;
    ofcLnLength?: number;
    ofcLnPrecision?: number;
    ofcLnScale?: number;
    ofcBoFilterLike?: boolean;
    ofcTxFieldType?: string;
    ofcTxEntityName?: string;
    oftBoTransient?: boolean;
    ficTxSqlFieldDefinition?: string;
    printSize?: number;
    colType?: string;
    boEditable?: boolean;
    boHidden?: boolean;
    boOptional?: boolean;
    boExist?: boolean;
    boRequired?: boolean;
    boEnabled?: boolean;
    entity?: object;
    filterValue?: object;
    boFilterable?: boolean;
    filterNodeClass?: string;
    funcFormatter?: Function;
    colEditorClass?: string;
    colValue?: object;
    colEditorNodeText?: string;
    boNullable?: boolean;
    boNonUpdatable?: boolean;
    boNonEditableForForm?: boolean;
    txParamName?: string;
    boKeyIdField?: boolean;
    boKeyIdentityField?: boolean;
    boUpdateFieldForQuery?: boolean;
    boInsertFieldForQuery?: boolean;
    boParamStatus?: boolean;
    boFilterLike?: boolean;
    lnCode?: number;
    boEditorOnlyNumber?: boolean;
    boWhereField?: boolean;
    static bui(txFieldName: string, txHeader: string): FiCol;
}

declare class FiKeybean {
    mapData: Map<string, any>;
    fiPut(txKey: string, value: any): FiKeybean;
    constructor();
}

declare function greet(name: string): string;

export { Fdr, FiCol, FiKeybean, FiMeta, FiNumber, FiString, OreLog, greet };
