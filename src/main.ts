import calculateCanvasArea from "./calculateCanvasSize"; 
import calculateCanvasPerimeter from "./calculateCanvasPerimeter";
import calculateCanvasDiagonal from "./calculateCanvasDiagonal";
import convertAreaToSquareFeet from "./convertAreaToSquareFeet";
import paintRequiredCalculator from "./paintRequiredCalculator";
import paintRequiredForMultipleCoats from "./paintRequiredForMultipleCoats";
import estimatePaintingTime from "./estimatePaintingTime";
import calculatePaintCost from "./calculatePaintCost";
import calculateTotalCost from "./calculateTotalCost";

function main() {
const length = "10";
  const width = "20";
  const coats = 2;
  const costPerLiter = 25;
  const laborCost = 100;  
  const coveragePerLiter = 11.4;

   const area = calculateCanvasArea(length, width);
  if (isNaN(area)) {
    console.error("Invalid canvas dimensions.");
    return;
  }

  const perimeter = calculateCanvasPerimeter(length, width);
  const diagonal = calculateCanvasDiagonal(length, width);
  const areaSqFt = convertAreaToSquareFeet(area);

  const paintRequired = paintRequiredForMultipleCoats(area, coveragePerLiter, coats);
  const paintCost = calculatePaintCost(paintRequired, costPerLiter);
  const totalCost = calculateTotalCost(paintCost, laborCost);
  const paintingTime = estimatePaintingTime(area, 12); 

  console.log(` Canvas Summary:
- Length: ${length}
- Width: ${width}
- Area (m²): ${area}
- Area (ft²): ${areaSqFt.toFixed(2)}
- Perimeter: ${perimeter}
- Diagonal: ${diagonal.toFixed(2)}

 Paint Details:
- Coats: ${coats}
- Coverage per Liter: ${coveragePerLiter}
- Paint Required: ${paintRequired.toFixed(2)} liters
- Paint Cost: $${paintCost.toFixed(2)}
- Labor Cost: $${laborCost}
- Total Cost: $${totalCost.toFixed(2)}
- Estimated Time: ${paintingTime.toFixed(2)} hours`);
}

main();
