# freeCodeCamp Daily Coding Challenge - July 5, 2026

## Bucket Fill

Given a 2D grid, a starting position (`[row, col]`), and a new value, replace the value at the starting position and all connected cells of the same value with the new value.

* Cells are connected if they are adjacent horizontally or vertically (not diagonally).

Return the updated grid.

### Tests:

1. `bucketFill([["R", "G"], ["R", "G"]], [0, 1], "B")` should return `[["R", "B"], ["R", "B"]]`.
2. `bucketFill([["Y", "G", "G"], ["Y", "Y", "Y"], ["B", "Y", "R"]], [1, 2], "B")` should return `[["B", "G", "G"], ["B", "B", "B"], ["B", "B", "R"]]`.
3. `bucketFill([["O", "O", "P"], ["P", "O", "O"], ["P", "P", "O"]], [2, 0], "R")` should return `[["O", "O", "P"], ["R", "O", "O"], ["R", "R", "O"]]`.
4. `bucketFill([["T", "T", "R", "T"], ["R", "T", "R", "T"], ["R", "T", "R", "T"], ["T", "T", "T", "T"]], [0, 3], "Y")` should return `[["Y", "Y", "R", "Y"], ["R", "Y", "R", "Y"], ["R", "Y", "R", "Y"], ["Y", "Y", "Y", "Y"]]`.
5. `bucketFill([["G", "B", "G", "B"], ["R", "B", "B", "G"], ["B", "G", "B", "R"], ["B", "G", "G", "B"]], [2, 2], "G")` should return `[["G", "G", "G", "B"], ["R", "G", "G", "G"], ["B", "G", "G", "R"], ["B", "G", "G", "B"]]`.