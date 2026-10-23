# freeCodeCamp Daily Coding Challenge - July 25

## Cell Signal

Given a grid containing three cell tower readings, determine the location of the phone.

* Each cell in the grid is either `0` (no tower) or a positive integer representing the number of cells to the phone, measured in a straight line: horizontal, vertical, or diagonal.
* Return the `[row, col]` of the cell that is the correct number of cells from all three towers.
* There is always exactly one solution.

### Tests:

1. `findSignal([[0, 0, 1], [0, 1, 0], [0, 0, 1]])` should return `[1, 2]`.
2. `findSignal([[0, 2, 0], [1, 0, 0], [0, 0, 1]])` should return `[2, 1]`.
3. `findSignal([[0, 0, 2, 0], [0, 0, 0, 0], [2, 0, 0, 0], [0, 0, 0, 1]])` should return `[2, 2]`.
4. `findSignal([[0, 3, 0, 0, 0], [0, 0, 0, 0, 2], [0, 0, 0, 0, 0], [4, 0, 0, 0, 0], [0, 0, 0, 0, 0]])` should return `[3, 4]`.
5. `findSignal([[3, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 2]])` should return `[3, 3]`.