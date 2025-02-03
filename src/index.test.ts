import { expect, test } from "vitest";
import {FiCol, greet} from "./index";

// test("greet function", () => {
//   expect(greet("World")).toBe("Hello, World!");
// });

test("FiCol bui", () => {
  let txFieldName = "name";
  let fiCol = FiCol.bui(txFieldName,"Header");
  //console.log('ficol test');
  expect(fiCol.ofcTxFieldName).toBe(txFieldName);
});
