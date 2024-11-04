"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Fdr: () => Fdr,
  FiCol: () => FiCol,
  FiKeybean: () => FiKeybean,
  FiMeta: () => FiMeta,
  FiNumber: () => FiNumber,
  FiString: () => FiString,
  OreLog: () => OreLog,
  greet: () => greet
});
module.exports = __toCommonJS(src_exports);

// src/core/FiString.ts
var FiString = class {
  static orEmpty(value) {
    if (value == void 0) return "";
    return value;
  }
};

// src/core/FiNumber.ts
var FiNumber = class {
  static orZero(value) {
    if (value == void 0) return 0;
    return value;
  }
  static orMinusOne(value) {
    if (value == void 0) return -1;
    return value;
  }
};

// src/FiMeta.ts
var FiMeta = class {
  txKey;
  txValue;
  lnKey;
  // Getters
  getTxKeyNtn() {
    return FiString.orEmpty(this.txKey);
  }
  getTxValueNtn() {
    return FiString.orEmpty(this.txValue);
  }
  getLnKeyOrMinusOne() {
    return FiNumber.orMinusOne(this.lnKey);
  }
};

// src/Fdr.ts
var Fdr = class {
  boResult;
  message;
  value;
  lnResponseCode;
  txId;
  txName;
  logList;
  rowsAffected;
  lnTotalCount;
  boFalseExist;
  // exception?:Exception;
  listException;
  lnStatus;
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
  getLogListNtn() {
    if (this.logList == null) {
      this.logList = new Array();
    }
    return this.logList;
  }
};

// src/OreLog.ts
var OreLog = class {
  orlTxMessage;
  orlTxLogType;
};

// src/FiCol.ts
var FiCol = class {
  ofcTxFieldName;
  ofcTxHeader;
  txLabel;
  ofcTxDbFieldName;
  txGuid;
  ofiTxIdType;
  ofcBoUniqGro1;
  ofcBoNullable;
  ofcBoUnique;
  ofcBoUtfSupport;
  ofcTxDefValue;
  ofcTxCollation;
  ofcTxTypeName;
  ofcLnLength;
  ofcLnPrecision;
  ofcLnScale;
  ofcBoFilterLike;
  ofcTxFieldType;
  ofcTxEntityName;
  oftBoTransient;
  ficTxSqlFieldDefinition;
  //prefSize?:ObjectProperty;
  printSize;
  colType;
  //colGenType?:OzColType;
  boEditable;
  boHidden;
  boOptional;
  boExist;
  boRequired;
  boEnabled;
  entity;
  //colFilterNode?:Node;
  //colFilterKeyEvent?:EventHandler;
  //paneHeader?:FxMigPane;
  filterValue;
  boFilterable;
  filterNodeClass;
  funcFormatter;
  //formatter?:Format;
  colEditorClass;
  // colEditorNode?:Node;
  colValue;
  colEditorNodeText;
  // colEditorKeyEvent?:EventHandler;
  // fnEditorSetOnActionWithEntity?:Consumer;
  // fnEditorSetOnAction?:BiConsumer;
  // fnEditorSetOnActionWitCol?:TriConsumer;
  // fnEditorSetOnActionWitValue?:TriConsumer;
  // fnEditorNodeValueFormmatter?:Function;
  // fnEditorNodeRendererBeforeSettingValue?:BiConsumer;
  // fnEditorNodeRendererAfterInitialValue1?:BiConsumer;
  // fnEditorNodeRendererAfterInitialValue2?:BiConsumer;
  // fnEditorNodeRendererAfterFormLoad?:BiConsumer;
  // fnEditorNodeAfterChangeForForm?:BiConsumer;
  // fnEditorNodeRendererWithCol?:TriConsumer;
  // fnEditorNodeRendererWitValue?:TriConsumer;
  // fnEditorNodeLfcAfterAllFormLoad?:Consumer;
  // predEditorDisable?:Predicate;
  // colIndex?:number;
  // listChildCol?:Array<object>;
  // childClazz?:Class;
  // entClass?:Class;
  // colComment?:string;
  // mapStyle?:Map;
  // fnColButton?:BiConsumer;
  boNullable;
  boNonUpdatable;
  boNonEditableForForm;
  txParamName;
  boKeyIdField;
  boKeyIdentityField;
  boUpdateFieldForQuery;
  boInsertFieldForQuery;
  boParamStatus;
  // tableColumnFx?:ObjectProperty;
  // fxTreeTableCol?:ObjectProperty;
  // fxTableCol2?:FxTableCol2;
  // fnColCellManualChanged?:Consumer;
  // summaryLabelNode?:FxLabel;
  // summaryCheckBox?:FxCheckBox;
  // summaryNode?:Node;
  // summaryType?:OzColSummaryType;
  // summaryCalculateFn?:Function;
  // boDontExportExcel?:boolean;
  // boDontExportExcelTemplate?:boolean;
  // ifxNodeEditor?:IfxNode;
  boFilterLike;
  // fnEditorNodeRendererAfterFormLoad2?:TriConsumer;
  // fnNodeFocusTrigger?:Consumer;
  lnCode;
  // fnValidate?:Function;
  boEditorOnlyNumber;
  boWhereField;
};

// src/FiKeybean.ts
var FiKeybean = class {
  mapData = /* @__PURE__ */ new Map();
  constructor() {
  }
};

// src/index.ts
function greet(name) {
  return `Hello, ${name}!`;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Fdr,
  FiCol,
  FiKeybean,
  FiMeta,
  FiNumber,
  FiString,
  OreLog,
  greet
});
