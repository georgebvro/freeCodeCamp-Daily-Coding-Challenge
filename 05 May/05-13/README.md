# freeCodeCamp Daily Coding Challenge - May 13, 2026

## Offending Element

Given an array of integers that is sorted in ascending order except for one out-of-place element, return the index of that element.

* If more than one element could be considered out of place, return the index of the first one.

### Tests:

1. `findOffender([1, 6, 2, 3, 4, 5])` should return `1`.
2. `findOffender([1, 2, 3, 5, 4, 5])` should return `3`.
3. `findOffender([2, 1])` should return `0`.
4. `findOffender([2, 4, 1, 6, 8])` should return `2`.
5. `findOffender([5, 18, 24, 33, 40, 55, 15, 68, 84, 91])` should return `6`.