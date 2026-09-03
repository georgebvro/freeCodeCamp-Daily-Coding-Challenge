# freeCodeCamp Daily Coding Challenge - April 4, 2026

## Equation Validation

Given a string representing a math equation, determine whether it is correct.

* The left side may contain up to three positive integers and the operators `+`, `-`, `*`, and `/`.
* The equation will be given in the format: `"number operator number = number"` (with two or three numbers on the left). For example: `"2 + 2 = 4"` or `"2 + 3 - 1 = 4"`.
* The right side will always be a single integer.

Follow standard order of operations: multiplication and division are evaluated before addition and subtraction, from left-to-right.

### Tests:

1. `isValidEquation("2 + 2 = 4")` should return `true`.
2. `isValidEquation("2 + 3 - 1 = 4")` should return `true`.
3. `isValidEquation("8 / 2 = 4")` should return `true`.
4. `isValidEquation("10 * 5 = 50")` should return `true`.
5. `isValidEquation("2 - 2 = 0")` should return `true`.
6. `isValidEquation("2 + 9 / 3 = 5")` should return `true`.
7. `isValidEquation("20 - 2 * 3 = 14")` should return `true`.
8. `isValidEquation("2 + 5 = 6")` should return `false`.
9. `isValidEquation("10 - 2 * 3 = 24")` should return `false`.
10. `isValidEquation("3 + 9 / 3 = 4")` should return `false`.