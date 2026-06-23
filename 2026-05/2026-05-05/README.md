# freeCodeCamp Daily Coding Challenge - May 5, 2026

## Narcissistic Number

Given a positive integer, determine whether it is a narcissistic number.

* A number is narcissistic if the sum of each of its digits raised to the power of the total number of digits equals the number itself.

For example, 153 has 3 digits, and 1<sup>3</sup> + 5<sup>3</sup> + 3<sup>3</sup> = 153, so it is narcissistic.

### Tests:

1. `isNarcissistic(153)` should return `true`.
2. `isNarcissistic(154)` should return `false`.
3. `isNarcissistic(371)` should return `true`.
4. `isNarcissistic(512)` should return `false`.
5. `isNarcissistic(9)` should return `true`.
6. `isNarcissistic(11)` should return `false`.
7. `isNarcissistic(9474)` should return `true`.
8. `isNarcissistic(6549)` should return `false`.