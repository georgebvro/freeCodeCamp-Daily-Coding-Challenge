# freeCodeCamp Daily Coding Challenge - March 1, 2026

## Flattened

Given an array, determine if it is flat.

* An array is flat if none of its elements are arrays.

### Tests

1. `isFlat([1, 2, 3, 4])` should return `true`.
2. `isFlat([1, [2, 3], 4])` should return `false`.
3. `isFlat([1, 0, false, true, "a", "b"])` should return `true`.
4. `isFlat(["a", [0], "b", true])` should return `false`.
5. `isFlat([1, [2, [3, [4, [5]]]], 6])` should return `false`.