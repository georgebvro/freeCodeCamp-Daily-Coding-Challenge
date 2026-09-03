# freeCodeCamp Daily Coding Challenge - December 18, 2025

## Checkerboard

Given an array with two numbers, the first being the number of rows and the second being the number of columns, return a matrix (an array of arrays) filled with `"X"` and `"O"` characters of the given size.

* The characters should alternate like a checkerboard.
* The top-left cell must always be `"X"`.

For example, given `[3, 3]`, return:
```
[
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "O", "X"]
]
```

### Tests

1. `createBoard([3, 3])` should return `[["X", "O", "X"], ["O", "X", "O"], ["X", "O", "X"]]`.
2. `createBoard([6, 1])` should return `[["X"], ["O"], ["X"], ["O"], ["X"], ["O"]]`.
3. `createBoard([2, 10])` should return `[["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"], ["O", "X", "O", "X", "O", "X", "O", "X", "O", "X"]]`.
4. `createBoard([5, 4])` should return `[["X", "O", "X", "O"], ["O", "X", "O", "X"], ["X", "O", "X", "O"], ["O", "X", "O", "X"], ["X", "O", "X", "O"]]`.