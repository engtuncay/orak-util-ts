import { FiLog } from "./FiLog";

export class Fdr {

  boResult?: boolean;
  message?: string;
  value?: object;
  lnResponseCode?: number;
  txId?: string;
  txName?: string;
  logList?: Array<FiLog>;
  rowsAffected?: number;
  lnTotalCount?: number;
  boFalseExist?: boolean;

  listException?: Array<object>;
  lnStatus?: number;

  // exception?:Exception;
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

  getLogListNtn(): Array<FiLog> {
    if (this.logList == null) {
      this.logList = new Array();
    }
    return this.logList;
  }
}
