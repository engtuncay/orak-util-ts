import { FkbList } from "./FkbList";

export interface IFiTableFkb {

  getITxTableName(): string;

  getITxPrefix(): string;

  genITableCols(): FkbList;

  genITableColsTrans(): FkbList;

}