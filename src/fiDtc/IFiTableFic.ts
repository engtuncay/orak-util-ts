import { FicList } from "./FicList";

export interface IFiTableFic {

  getITxTableName(): string;

  getITxPrefix(): string;

  genITableCols(): FicList;

  genITableColsTrans(): FicList;
  
}