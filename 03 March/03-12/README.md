# freeCodeCamp Daily Coding Challenge - March 12, 2026

## Domino Chain Validator

Given a 2D array representing a sequence of dominoes, determine whether it forms a valid chain.

* Each element in the array represents a domino and will be an array of two numbers from 1 to 6, (inclusive).
* For the chain to be valid, the second number of each domino must match the first number of the next domino.
* The first number of the first domino and the last number of the last domino don't need to match anything.

### Tests:

1. `isValidDominoChain([[1, 3], [3, 6], [6, 5]])` should return `true`.
2. `isValidDominoChain([[6, 2], [3, 4], [4, 1]])` should return `false`.
3. `isValidDominoChain([[2, 5], [5, 6], [5, 1]])` should return `false`.
4. `isValidDominoChain([[4, 3], [3, 1], [1, 6], [6, 6], [6, 5], [5, 1], [1, 1], [1, 4], [4, 4], [4, 2]])` should return `true`.
5. `isValidDominoChain([[2, 3], [3, 3], [3, 6], [6, 1], [1, 4], [3, 5], [5, 5], [5, 4], [4, 2], [2, 2]])` should return `false`.