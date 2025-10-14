# freeCodeCamp Daily Coding Challenge - September 23, 2025

## String Mirror

Given two strings, determine if the second string is a mirror of the first.

* A string is considered a mirror if it contains the same letters in reverse order.
* Treat uppercase and lowercase letters as distinct.
* Ignore all non-alphabetical characters.

### Tests

1. `isMirror("helloworld", "helloworld")` should return `false`.
2. `isMirror("Hello World", "dlroW olleH")` should return `true`.
3. `isMirror("RaceCar", "raCecaR")` should return `true`.
4. `isMirror("RaceCar", "RaceCar")` should return `false`.
5. `isMirror("Mirror", "rorrim")` should return `false`.
6. `isMirror("Hello World", "dlroW-olleH")` should return `true`.
7. `isMirror("Hello World", "!dlroW !olleH")` should return `true`.