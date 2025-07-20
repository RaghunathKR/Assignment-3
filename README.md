# SENG8120 Modern Automated Testing 

Version: Alpaca

## Purpose

This repository houses the code we require for examples and assignments.

## Repository Usage

This repository will contain branches of code.

Please refer to your instructor's directions on how to use this repository.

## Branch Usage

**Installing The Dependencies**

You will need to install dependencies by using:

```bash
npm install
```

**Running The Project**

To run the project, you must first build the project:

```bash
npm run build
```

followed by:

```bash
npm start
```

Note:  if you make a change in the production code, you must `build` & `start`.
Otherwise, your changes will not be reflected.

**Running The Tests**

To run the tests, you can use

```bash
npm run test
```

To keep the tests running, you can use

```bash
npm run test -- --watch
```

To run a specific test, you can use

```bash
npm run test [my test name]
```


## Assignment Overview

As part of **Assignment #3**, the entire codebase was reviewed and improved to follow **industry best practices** in software development. This included:

- Implementing **Test-Driven Development (TDD)**
- Writing and extending **unit tests** for all modules using Jest
- Adding **input validation** and handling of edge cases
- Ensuring **clean modular exports** with `index.ts` files
- Improving naming, logic correctness, and error handling

### Folder-by-Folder Summary


-**calculateCanvasDiagonal**
- Replaced incorrect perimeter logic with proper diagonal calculation using the Pythagorean theorem.
- Added input validation for non-numeric and negative values.
- Included full unit test coverage and created `index.ts`.


-**calculateCanvasPerimeter**
- Verified and retained correct perimeter formula: `2 × (length + width)`.
- Added input type checks and edge case handling (e.g., 0 and negative inputs).
- Expanded tests and added `index.ts`.


-**calculateCanvasSize**
- This function calculates the area (`length × width`) using parsed string inputs.
- Added missing test cases to cover all relevant scenarios, including invalid input.
- Introduced input validation and added `index.ts`.


-**calculatePaintCost**
- Confirmed multiplication logic (`paintRequired × costPerLiter`) is correct.
- Added validation for input types and support for negative values.
- Expanded test coverage and added `index.ts`.


-**calculateTotalCost**
- Ensured total cost is the sum of paint and labor costs.
- Handled negative values and added safeguards for invalid input types.
- Added edge tests and created `index.ts`.


-**convertAreaToSquareFeet**
- Verified metric-to-imperial conversion using factor `10.7639`.
- Handled invalid and non-numeric input types robustly.
- Added new tests and modular export via `index.ts`.


-**estimatePaintingTime**
- Added input validation to avoid division by zero and `NaN` cases.
- Confirmed formula: `area ÷ paintingSpeed`, allowing for negative and edge input.
- Expanded test coverage and added `index.ts`.


-**paintRequiredCalculator**
- Ensured accurate calculation of paint required: `area ÷ coveragePerLiter`.
- Added validation for edge cases (e.g., zero or invalid inputs).
- Created tests for negative and malformed inputs and added `index.ts`.


-**paintRequiredForMultipleCoats**
- Added checks for all three inputs: `area`, `coveragePerLiter`, and `coats`.
- Ensured correct formula: `(area / coveragePerLiter) × coats`.
- Covered invalid input cases and added `index.ts`.


#### 📄 main.ts
- Composed all individual modules into one application pipeline.
- Calculated and displayed area, perimeter, diagonal, paint required, cost, and time.
- Handled invalid scenarios with clear console outputs and structured summaries.

---