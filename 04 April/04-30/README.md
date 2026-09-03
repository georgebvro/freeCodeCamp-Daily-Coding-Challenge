# freeCodeCamp Daily Coding Challenge - April 30

## Binary Crossword

Given a character, determine if its 8-bit binary representation can be found in the following grid, horizontally or vertically in either direction:
```
0 1 0 0 0 0 0 1
0 1 1 0 1 1 1 1
0 1 0 0 0 1 0 0
0 1 1 0 0 1 0 1
0 1 0 1 0 0 1 0
0 1 0 1 0 1 0 0
0 1 1 0 1 0 0 0
1 0 1 0 1 1 1 0
```

For example, `"A"` has the binary representation `01000001`, which appears in the first row from left to right.

### Tests:

1. `isInCrossword("I")` should return `true`.
2. `isInCrossword("D")` should return `true`.
3. `isInCrossword("0")` should return `true`.
4. `isInCrossword("u")` should return `true`.
5. `isInCrossword("Y")` should return `false`.
6. `isInCrossword("p")` should return `false`.
7. `isInCrossword("1")` should return `false`.
8. `isInCrossword("Q")` should return `false`.