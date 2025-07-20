export default function estimatePaintingTime(area: number, paintingSpeed: number): number {

  if (
    typeof area !== "number" ||
    typeof paintingSpeed !== "number" ||
    isNaN(area) ||
    isNaN(paintingSpeed)
  ) {
    return NaN;
  } 
  
  return area / paintingSpeed;
}
