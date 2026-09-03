# freeCodeCamp Daily Coding Challenge - March 3, 2026

## Perfect Cube Count

Given two integers, determine how many perfect cubes exist in the range between and including the two numbers.

* The lower number is not garanteed to be the first argument.
* A number is a perfect cube if there exists an integer (`n`) where `n * n * n = number`. For example, 27 is a perfect cube because `3 * 3 * 3 = 27`.

### Tests

1. `countPerfectCubes(3, 30)` should return `2`.
2. `countPerfectCubes(1, 30)` should return `3`.
3. `countPerfectCubes(30, 0)` should return `4`.
4. `countPerfectCubes(-64, 64)` should return `9`.
5. `countPerfectCubes(9214, -8127)` should return `41`.