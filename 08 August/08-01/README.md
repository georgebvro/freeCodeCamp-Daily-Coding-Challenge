# freeCodeCamp Daily Coding Challenge - August 1

## Magic Square Solver

Given a 3x3 grid with one missing number (represented as `0`), return the missing number that completes the magic square, or `"impossible"` if no valid number exists.

A magic square is a grid where every row, column, and diagonal adds up to the same number.

### Tests:

1. `solveMagicSquare([[2, 7, 6], [9, 0, 1], [4, 3, 8]])` should return `5`.
2. `solveMagicSquare([[0, 14, 12], [18, 10, 2], [8, 6, 16]])` should return `4`.
3. `solveMagicSquare([[12, 17, 16], [19, 0, 10], [14, 13, 18]])` should return `"impossible"`.
4. `solveMagicSquare([[15, 35, 31], [43, 27, 11], [23, 19, 0]])` should return `39`.
5. `solveMagicSquare([[26, 41, 14], [47, 35, 0], [32, 29, 44]])` should return `"impossible"`.