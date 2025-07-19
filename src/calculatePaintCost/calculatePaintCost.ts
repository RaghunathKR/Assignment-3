
export default function calculatePaintCost(paintRequired: number, costPerLiter: number): number {
  if (
    typeof paintRequired !== "number" ||
    typeof costPerLiter !== "number" ||
    isNaN(paintRequired) ||
    isNaN(costPerLiter)
  ) {
    return NaN;
  }

  return paintRequired * costPerLiter;
}
