# freeCodeCamp Daily Coding Challenge - August 8

## Bucket Fill 2

Given a 2D grid of single-letter color strings and a target color, return the minimum number of flood fill "clicks" needed to make the entire grid the target color.

* Each click changes the clicked cell's color and the entire region of connected cells of the same color with the target color.
* Cells are connected horizontally and vertically (not diagonally).

### Tests:

1. `bucketFill([["R", "R"], ["R", "R"]], "G")` should return `1`.
2. `bucketFill([["B", "B", "B"], ["B", "B", "B"], ["B", "B", "B"]], "B")` should return `0`.
3. `bucketFill([["G", "Y", "Y"], ["G", "Y", "G"], ["Y", "Y", "G"]], "R")` should return `3`.
4. `bucketFill([["G", "G", "P", "Y"], ["O", "P", "P", "P"], ["O", "O", "P", "G"], ["G", "O", "O", "G"]], "P")` should return `5`.
5. `bucketFill([["G", "G", "C", "C", "O"], ["B", "Y", "B", "Y", "O"], ["B", "J", "O", "J", "B"], ["G", "Y", "Y", "Y", "B"], ["G", "P", "P", "G", "G"]], "Y")` should return `12`.