# freeCodeCamp Daily Coding Challenge - January 28, 2026

## Flatten the Array

Given an array that contains nested arrays, return a new array with all values flattened into a single, one-dimensional array. Retain the original order of the items in the arrays.

### Tests

1. `flatten([1, [2, 3], 4])` should return `[1, 2, 3, 4]`.
2. `flatten([5, [4, [3, 2]], 1])` should return `[5, 4, 3, 2, 1]`.
3. `flatten(["A", [[[["B"]]]], "C"])` should return `["A", "B", "C"]`.
4. `flatten([["L", "M", "N"], ["O", ["P", "Q", ["R", ["S", ["T", "U"]]]]], "V", ["W", ["X", ["Y", ["Z"]]]]])` should return `["L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]`.
5. `flatten([["red", ["blue", ["green", ["yellow", ["purple"]]]]], "orange", ["pink", ["brown"]]])` should return `["red","blue","green","yellow","purple","orange","pink","brown"]`.