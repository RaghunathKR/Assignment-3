import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("returns correct area for positive values", () => {
    expect(calculateCanvasSize("5", "10")).toBe(50);
    expect(calculateCanvasSize("3", "7")).toBe(21);
  });

  test("returns 0 if one of the sides is 0", () => {
    expect(calculateCanvasSize("0", "10")).toBe(0);
    expect(calculateCanvasSize("10", "0")).toBe(0);
  });

  test("handles negative values correctly", () => {
    expect(calculateCanvasSize("-5", "10")).toBe(-50);
    expect(calculateCanvasSize("-5", "-5")).toBe(25);
  });

  test("returns NaN for non-numeric inputs", () => {
    expect(calculateCanvasSize("abc", "10")).toBeNaN();
    expect(calculateCanvasSize("10", "xyz")).toBeNaN();
  });
});
