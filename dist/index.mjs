// src/FiMeta.ts
var FiMeta = class {
  txKey;
  txValue;
  lnKey;
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
export {
  Fdr,
  FiCol,
  FiKeybean,
  FiMeta,
  OreLog,
  greet
};
