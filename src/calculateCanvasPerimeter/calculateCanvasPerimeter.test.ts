import calculateCanvasPerimeter from "./calculateCanvasPerimeter";

describe("calculateCanvasPerimeter", () => {
  test("returns correct perimeter for positive values", () => {
    expect(calculateCanvasPerimeter("10", "100")).toBe(220);
    expect(calculateCanvasPerimeter("5", "5")).toBe(20);
  });

  test("returns 0 for zero values", () => {
    expect(calculateCanvasPerimeter("0", "0")).toBe(0);
  });

  test("handles negative values correctly", () => {
    expect(calculateCanvasPerimeter("-10", "20")).toBe(60);
    expect(calculateCanvasPerimeter("-5", "-5")).toBe(20);
  });

  test("returns NaN for invalid string inputs", () => {
    expect(calculateCanvasPerimeter("abc", "10")).toBeNaN();
    expect(calculateCanvasPerimeter("10", "xyz")).toBeNaN();
    expect(calculateCanvasPerimeter("abc", "xyz")).toBeNaN();
  });
});
