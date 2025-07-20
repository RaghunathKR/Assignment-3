export default function paintRequiredCalculator(area: number, coveragePerLiter: number): number {

  if (
    typeof area !== "number" ||
    typeof coveragePerLiter !== "number" ||
    isNaN(area) ||
    isNaN(coveragePerLiter)
  ) {
    return NaN;
  }
  
  return area / coveragePerLiter;
}
