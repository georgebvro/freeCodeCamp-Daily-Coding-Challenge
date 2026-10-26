# freeCodeCamp Daily Coding Challenge - July 26

## Letter Distance

Given two strings of equal length, return the sum of the shortest distances between each pair of characters.

* The input will only contain lowercase letters
* The alphabet is treated as a circle, so the distance between `a` and `z` is 1.

### Tests:

1. `letterDistance("abc", "bcd")` should return `3`.
2. `letterDistance("abc", "xyz")` should return `9`.
3. `letterDistance("encrypt", "decrypt")` should return `10`.
4. `letterDistance("algorithm", "codeblock")` should return `43`.
5. `letterDistance("lobster", "penguin")` should return `47`.
6. `letterDistance("alligator", "crocodile")` should return `55`.