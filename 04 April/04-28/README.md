# freeCodeCamp Daily Coding Challenge - April 28, 2026

## Number Words

Given an integer from 0 to 99, return its English word representation.

* `0` returns `"zero"`.
* Numbers 1-19 have unique names (`"one"`, `"two"`, ..., `"ten"`, `"eleven"`, ..., `"eighteen"`, `"nineteen"`).
* Multiples of 10 from 20-90 have their own names (`"twenty"`, `"thirty"`, ..., `"eighty"`, `"ninety"`).
* Numbers 21-99 that are not multiples of 10 are written as two words joined by a hyphen. For example `"forty-two"` and `"fifty-three"`.

### Tests:

1. `getNumberWords(0)` should return `"zero"`.
2. `getNumberWords(10)` should return `"ten"`.
3. `getNumberWords(19)` should return `"nineteen"`.
4. `getNumberWords(30)` should return `"thirty"`.
5. `getNumberWords(53)` should return `"fifty-three"`.
6. `getNumberWords(7)` should return `"seven"`.
7. `getNumberWords(12)` should return `"twelve"`.
8. `getNumberWords(60)` should return `"sixty"`.
9. `getNumberWords(67)` should return `"sixty-seven"`.
10. `getNumberWords(98)` should return `"ninety-eight"`.