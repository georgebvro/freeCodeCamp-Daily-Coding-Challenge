# freeCodeCamp Daily Coding Challenge - December 4, 2025

## Permutation Count

Given a string, return the number of distinct permutations that can be formed from its characters.

* A permutation is any reordering of the characters in the string.
* Do not count duplicate permutations.
* If the string contains repeated characters, repeated arrangements should only be counted once.
* The string will contain only letters (`A-Z`, `a-z`).

For example, given `"abb"`, return `3` because there's three unique ways to arrange the letters: `"abb"`, `"bab"`, and `"bba"`.

### Tests

1. `countPermutations("abb")` should return `3`.
2. `countPermutations("abc")` should return `6`.
3. `countPermutations("racecar")` should return `630`.
4. `countPermutations("freecodecamp")` should return `39916800`.