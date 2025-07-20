export default function calculateTotalCost(paintCost: number, laborCost: number): number {
  if (
    typeof paintCost !== "number" ||
    typeof laborCost !== "number" ||
    isNaN(paintCost) ||
    isNaN(laborCost)
  ) {
    return NaN;
  }

  return paintCost + laborCost;
}
