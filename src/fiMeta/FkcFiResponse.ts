// Codegen v2
import { FiKeybean } from "../fiDtc/FiKeybean";
import { FkbList } from "../fiDtc/FkbList";
import { FimFiCol } from "./FimFiCol";

export class FkcFiResponse {

  public static getTxTableName(): string {
    return "FiResponse";
  }

  public getITxTableName(): string {
    return FkcFiResponse.getTxTableName();
  }

  public genITableCols(): FkbList {
    return FkcFiResponse.genTableCols();
  }

  public genITableColsTrans(): FkbList {
    return FkcFiResponse.genTableColsTrans();
  }

  public static getTxPrefix(): string {
    return "fs";
  }

  public getITxPrefix(): string {
    return FkcFiResponse.getTxPrefix();
  }

  public static addFieldDesc(fkbList: FkbList) {

    for (const fkb of fkbList.getArray()) {

    }

  }


  public static genTableCols(): FkbList {
    let fkbList = new FkbList();

    fkbList.add(FkcFiResponse.fsBoTknValid());
    fkbList.add(FkcFiResponse.fsBoResult());
    fkbList.add(FkcFiResponse.fsRefFdr());
    fkbList.add(FkcFiResponse.fsRefValue());
    fkbList.add(FkcFiResponse.fsTxVer());
    fkbList.add(FkcFiResponse.fsTxMessage());
    fkbList.add(FkcFiResponse.fsLnErrorCode());
    fkbList.add(FkcFiResponse.fsTxToken());


    return fkbList;
  }

  public static genTableColsTrans(): FkbList {
    let fkbList = new FkbList();



    return fkbList;
  }

  public static fsBoTknValid(): FiKeybean {
    let fkbCol = new FiKeybean();
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldName(), "fsBoTknValid ");
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldType(), "bool");

    return fkbCol;
  }

  public static fsBoResult(): FiKeybean {
    let fkbCol = new FiKeybean();
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldName(), "fsBoResult ");
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldType(), "bool");

    return fkbCol;
  }

  public static fsRefFdr(): FiKeybean {
    let fkbCol = new FiKeybean();
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldName(), "fsRefFdr ");
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldType(), "fdr");

    return fkbCol;
  }

  public static fsRefValue(): FiKeybean {
    let fkbCol = new FiKeybean();
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldName(), "fsRefValue ");
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldType(), "object");

    return fkbCol;
  }

  public static fsTxVer(): FiKeybean {
    let fkbCol = new FiKeybean();
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldName(), "fsTxVer ");
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldType(), "string");

    return fkbCol;
  }

  public static fsTxMessage(): FiKeybean {
    let fkbCol = new FiKeybean();
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldName(), "fsTxMessage ");
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldType(), "string");

    return fkbCol;
  }

  public static fsLnErrorCode(): FiKeybean {
    let fkbCol = new FiKeybean();
    fkbCol.addFieldByFm(FimFiCol.ofcTxFieldName(), "fsLnErrorCode");
    fkbCol.addFieldByFm(FimFiCol.ofcTxFieldType(), "int");

    return fkbCol;
  }

  public static fsTxToken(): FiKeybean {
    let fkbCol = new FiKeybean();
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldName(), "fsTxToken");
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldType(), "string");

    return fkbCol;
  }


}
