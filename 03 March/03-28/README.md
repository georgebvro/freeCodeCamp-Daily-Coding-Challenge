# freeCodeCamp Daily Coding Challenge - March 28, 2026

## Pascal's Triangle Row

Given an integer `n`, return the `n`th row of Pascal's triangle as an array.

In Pascal's Triangle, each row begins and ends with 1, and each interior value is the sum of the two values directly above it.

Here are the first 5 rows of the triangle:
```
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1
```

### Tests:

1. `pascalRow(5)` should return `[1, 4, 6, 4, 1]`.
2. `pascalRow(3)` should return `[1, 2, 1]`.
3. `pascalRow(1)` should return `[1]`.
4. `pascalRow(10)` should return `[1, 9, 36, 84, 126, 126, 84, 36, 9, 1]`.
5. `pascalRow(15)` should return `[1, 14, 91, 364, 1001, 2002, 3003, 3432, 3003, 2002, 1001, 364, 91, 14, 1]`.