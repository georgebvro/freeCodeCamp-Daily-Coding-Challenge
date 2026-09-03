# freeCodeCamp Daily Coding Challenge - February 27, 2026

## Matrix Shift

Given a matrix (array of arrays) of numbers and an integer, shift all values in the matrix by the given amount.

* A positive shift moves values to the right.
* A negative shift moves values to the left.

Values should wrap:
* Treat the matrix as one continuous sequence of values.
* When a value moves past the end of a row, it continues at the beginning of the next row.
* When a value moves past the last position in the matrix, it wraps to the first position.
* The same applies in reverse when shifting left.

For example, given:
```
[
  [1, 2, 3],
  [4, 5, 6]
]
```
with a shift of `1`, move all the numbers to the right one:
```
[
  [6, 1, 2],
  [3, 4, 5]
]
```

### Tests

1. `shiftMatrix([[1, 2, 3], [4, 5, 6]], 1)` should return `[[6, 1, 2], [3, 4, 5]]`.
2. `shiftMatrix([[1, 2, 3], [4, 5, 6]], -1)` should return `[[2, 3, 4], [5, 6, 1]]`.
3. `shiftMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5)` should return `[[5, 6, 7], [8, 9, 1], [2, 3, 4]]`.
4. `shiftMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], -6)` should return `[[7, 8, 9], [1, 2, 3], [4, 5, 6]]`.
5. `shiftMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 7)` should return `[[10, 11, 12, 13], [14, 15, 16, 1], [2, 3, 4, 5], [6, 7, 8, 9]]`.
6. `shiftMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], -54)` should return `[[7, 8, 9, 10], [11, 12, 13, 14], [15, 16, 1, 2], [3, 4, 5, 6]]`.