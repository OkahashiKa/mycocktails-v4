import { describe, expect, it } from "vitest";
import { makeable } from "./makeable";

const c = (id: string, recipe: { materialId: string; optional?: true }[]) => ({
  id,
  recipe: recipe.map((r) => ({ amount: "1", ...r })),
});

describe("makeable", () => {
  it("必須材料が全部あれば含む", () => {
    expect(makeable(new Set(["a", "b"]), [c("x", [{ materialId: "a" }, { materialId: "b" }])]).map((x) => x.id)).toEqual(["x"]);
  });
  it("必須材料が 1 つでも無ければ含まない", () => {
    expect(makeable(new Set(["a", "b"]), [c("x", [{ materialId: "a" }, { materialId: "b" }, { materialId: "c" }])])).toEqual([]);
  });
  it("optional の材料は無くても含む", () => {
    expect(makeable(new Set(["a"]), [c("x", [{ materialId: "a" }, { materialId: "z", optional: true }])]).map((x) => x.id)).toEqual(["x"]);
  });
});
