export default function paintRequiredForMultipleCoats(
  area: number, 
  coveragePerLiter: number, 
  coats: number
 ): number {

  if (
    typeof area !== "number" ||
    typeof coveragePerLiter !== "number" ||
    typeof coats !== "number" ||
    isNaN(area) ||
    isNaN(coveragePerLiter) ||
    isNaN(coats)
  ) {
    return NaN;
  }
  
  return (area / coveragePerLiter) * coats;
}
