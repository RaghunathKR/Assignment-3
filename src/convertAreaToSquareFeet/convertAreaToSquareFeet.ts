export default function convertAreaToSquareFeet(area: number): number {
  const conversionFactor = 10.7639;

    if (typeof area !== "number" || isNaN(area)) return NaN;

  return area * conversionFactor;
}
