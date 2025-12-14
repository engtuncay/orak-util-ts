// Codegen v2
import { FiKeybean } from "../fiDtc/FiKeybean";
import { FkbList } from "../fiDtc/FkbList";
import { FimFiCol } from "./FimFiCol";

export class FkcFiRequest {

  public static getTxTableName(): string {
    return "FiRequest";
  }

  public getITxTableName(): string {
    return FkcFiRequest.getTxTableName();
  }

  public genITableCols(): FkbList {
    return FkcFiRequest.genTableCols();
  }

  public genITableColsTrans(): FkbList {
    return FkcFiRequest.genTableColsTrans();
  }

  public static getTxPrefix(): string {
    return "fr";
  }

  public getITxPrefix(): string {
    return FkcFiRequest.getTxPrefix();
  }

  public static addFieldDesc(fkbList: FkbList) {

    for (const fkb of fkbList.getArray()) {

    }

  }


  public static genTableCols(): FkbList {
    let fkbList = new FkbList();

    fkbList.add(FkcFiRequest.frTxProfile());
    fkbList.add(FkcFiRequest.frTxUser());
    fkbList.add(FkcFiRequest.frTxPass());
    fkbList.add(FkcFiRequest.frTxToken());
    fkbList.add(FkcFiRequest.frFkbParams());
    fkbList.add(FkcFiRequest.frBoShowDoc());
    fkbList.add(FkcFiRequest.frTxDb());


    return fkbList;
  }

  public static genTableColsTrans(): FkbList {
    let fkbList = new FkbList();



    return fkbList;
  }

  public static frTxProfile(): FiKeybean {
    let fkbCol = new FiKeybean();
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldName(), "frTxProfile");
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldType(), "string");

    return fkbCol;
  }

  public static frTxUser(): FiKeybean {
    let fkbCol = new FiKeybean();
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldName(), "frTxUser");
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldType(), "string");

    return fkbCol;
  }

  public static frTxPass(): FiKeybean {
    let fkbCol = new FiKeybean();
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldName(), "frTxPass");
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldType(), "string");

    return fkbCol;
  }

  public static frTxToken(): FiKeybean {
    let fkbCol = new FiKeybean();
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldName(), "frTxToken");
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldType(), "string");

    return fkbCol;
  }

  public static frFkbParams(): FiKeybean {
    let fkbCol = new FiKeybean();
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldName(), "frFkbParams");
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldType(), "fkb");

    return fkbCol;
  }

  public static frBoShowDoc(): FiKeybean {
    let fkbCol = new FiKeybean();
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldName(), "frBoShowDoc");
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldType(), "bool");

    return fkbCol;
  }

  public static frTxDb(): FiKeybean {
    let fkbCol = new FiKeybean();
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldName(), "frTxDb");
    fkbCol.addFieldByFiMeta(FimFiCol.ofcTxFieldType(), "string");

    return fkbCol;
  }


}
