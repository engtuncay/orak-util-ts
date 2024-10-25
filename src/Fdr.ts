import { OreLog } from "./OreLog";

export class Fdr {
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
  // exception?:Exception;
  listException?: Array<object>;
  lnStatus?: number;
  // lnSuccessOpCount?: number;
  // lnFailureOpCount?: number;
  // txQueryType?: string;
  // lnInsertedRows?: number;
  // lnUpdatedRows?: number;
  // lnDeletedRows?: number;
  // boOpResult?: boolean;
  // boQueryExecuted?: boolean;
  // boMultiFdr?: boolean;
  // listFdr?: Array<Fdr>;
  // boLockAddLog?: boolean;
  //obsMethodFinished?: Array;

  getLogListNtn(): Array<OreLog> {
    if (this.logList == null) {
      this.logList = new Array();
    }
    return this.logList;
  }
}
