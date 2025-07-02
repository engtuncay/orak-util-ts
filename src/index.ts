//export {Fel} from "./fiDataContainer/Fel";
export {FiKeyEntity} from "./fiDtc/FiKeyEntity";
export {FiFetchClient} from "./fiApi/FiFetchClient";
export {FiHttpClient} from "./fiApi/FiHttpClient";
export {FiString} from "./fiCore/FiString";
export {FiNumber} from "./fiCore/FiNumber";
export {FiMeta} from "./fiDtc/FiMeta";
export {Fdr} from "./fiDtc/Fdr";
export {FiLog} from "./fiDtc/FiLog";
export {FiCol} from "./fiDtc/FiCol";
export {FiKeybean} from "./fiDtc/FiKeybean";
export type {IFiMeta} from "./fiDtc/IFiMeta";
export function greet(name: string): string {
    //let a = new FiKeyEntity()
    return `Hello, ${name}!`;
}
