// src/FiMeta.ts
var FiMeta = class {
  txKey;
  txValue;
  lnKey;
};

// src/Fikeybean.ts
var Fikeybean = class {
  mapData = /* @__PURE__ */ new Map();
  constructor() {
  }
};

// src/index.ts
function greet(name) {
  return `Hello, ${name}!`;
}
export {
  FiMeta,
  Fikeybean,
  greet
};
