# freeCodeCamp Daily Coding Challenge - April 1, 2026

## Prank Number

Given an array of numbers where all but one number follow a pattern, return a new array with the one number that doesn't follow the pattern fixed.

The pattern will be one of:
* The numbers increase from one to the next by a fixed amount (addition).
* The numbers decrease from one to the next by a fixed amount (subtraction).

For example, given `[2, 4, 7, 8, 10]` return `[2, 4, 6, 8, 10]`.

### Tests:

1. `fixPrankNumber([2, 4, 7, 8, 10])` should return `[2, 4, 6, 8, 10]`.
2. `fixPrankNumber([10, 10, 8, 7, 6])` should return `[10, 9, 8, 7, 6]`.
3. `fixPrankNumber([12, 24, 36, 48, 61, 72, 84, 96])` should return `[12, 24, 36, 48, 60, 72, 84, 96]`.
4. `fixPrankNumber([4, 1, -2, -5, -8, -5])` should return `[4, 1, -2, -5, -8, -11]`.
5. `fixPrankNumber([0, 100, 200, 300, 150, 500])` should return `[0, 100, 200, 300, 400, 500]`.
6. `fixPrankNumber([400, 425, 400, 375, 350, 325, 300])` should return `[450, 425, 400, 375, 350, 325, 300]`.
7. `fixPrankNumber([-5, 5, 10, 15, 20])` should return `[0, 5, 10, 15, 20]`.