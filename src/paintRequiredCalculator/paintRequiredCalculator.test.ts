import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paintRequiredCalculator", () => {
  test("calculates paint required for valid values", () => {
    expect(paintRequiredCalculator(50, 10)).toBe(5);
    expect(paintRequiredCalculator(100, 20)).toBe(5);
  });

  test("returns Infinity when coverage is 0", () => {
    expect(paintRequiredCalculator(100, 0)).toBe(Infinity);
  });

  test("returns 0 if area is 0", () => {
    expect(paintRequiredCalculator(0, 10)).toBe(0);
  });

  test("handles negative values", () => {
    expect(paintRequiredCalculator(-100, 10)).toBe(-10);
    expect(paintRequiredCalculator(100, -10)).toBe(-10);
    expect(paintRequiredCalculator(-100, -10)).toBe(10);
  });

  test("returns NaN for invalid inputs", () => {
    expect(paintRequiredCalculator(NaN, 10)).toBeNaN();
    expect(paintRequiredCalculator(100, NaN)).toBeNaN();
    expect(paintRequiredCalculator("abc" as any, 10)).toBeNaN();
    expect(paintRequiredCalculator(100, undefined as any)).toBeNaN();
  });
});
