# freeCodeCamp Daily Coding Challenge - September 22, 2025

## Digits vs Letters

Given a string, return `"digits"` if the string has more digits than letters, `"letters"` if it has more letters than digits, and `"tie"` if it has the same amount of digits and letters.

* Digits consist of `0-9`.
* Letters consist of `a-z` in upper or lower case.
* Ignore any other characters.

### Tests

1. `digitsOrLetters("abc123")` should return `"tie"`.
2. `digitsOrLetters("a1b2c3d")` should return `"letters"`.
3. `digitsOrLetters("1a2b3c4")` should return `"digits"`.
4. `digitsOrLetters("abc123!@#DEF")` should return `"letters"`.
5. `digitsOrLetters("H3110 W0R1D")` should return `"digits"`.
6. `digitsOrLetters("P455W0RD")` should return `"tie"`.