declare class FiMeta {
    txKey: string;
    txValue: string;
    lnKey: number;
}

declare class Fikeybean {
    mapData: Map<any, any>;
    constructor();
}

declare function greet(name: string): string;

export { FiMeta, Fikeybean, greet };
