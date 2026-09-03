# freeCodeCamp Daily Coding Challenge - April 12, 2026

## Spiral Matrix

Given a 2D matrix, return a flat array with all of its values in clockwise order.

The returned array should have the top-left value first, move right along the top row, then down the right column, then left along the bottom row, then up the left column. Repeat inward for any remaining layers.

For example, given:
```
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
```

Return `[1, 2, 3, 6, 9, 8, 7, 4, 5]`.

### Tests:

1. `spiralMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])` should return `[1, 2, 3, 6, 9, 8, 7, 4, 5]`.
2. `spiralMatrix([["a", "b", "c", "d"], ["l", "m", "n", "e"], ["k", "p", "o", "f"], ["j", "i", "h", "g"]])` should return `["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"]`.
3. `spiralMatrix([[true, false, false], [false, true, true], [false, true, false], [true, true, false]])` should return `[true, false, false, true, false, false, true, true, false, false, true, true]`.
4. `spiralMatrix([[25, 24, 23, 22, 21], [10, 9, 8, 7, 20], [11, 2, 1, 6, 19], [12, 3, 4, 5, 18], [13, 14, 15, 16, 17]])` should return `[25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]`.