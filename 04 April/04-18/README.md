# freeCodeCamp Daily Coding Challenge - April 18

## Array Sum Finder

Given an array of numbers and a target number, return the first subset of two or more numbers that adds up to the target.

* The "first" subset is the one whose elements have the lowest possible indices, prioritizing the earliest index first.
* Each number in the array may only be used once.
* If no valid subset exists, return `"Sum not found"`.

Return the matching numbers as an array in the order they appear in the original array.

### Tests:

1. `findSum([1, 3, 5, 7], 6)` should return `[1, 5]`.
2. `findSum([1, 2, 3, 4, 5], 5)` should return `[1, 4]`.
3. `findSum([1, 2, 3, 4, 5], 6)` should return `[1, 2, 3]`.
4. `findSum([-1, -2, 3, 4], 1)` should return `[-1, -2, 4]`.
5. `findSum([3, 1, 4, 1, 5, 9, 2, 6], 10)` should return `[3, 1, 4, 2]`.
6. `findSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 20)` should return `[1, 2, 3, 5, 9]`.
7. `findSum([7, 9, 4, 2, 5], 10)` should return `"Sum not found"`.