# freeCodeCamp Daily Coding Challenge - May 16, 2026

## Longest Domino Chain

Given a 2D array representing a set of dominoes, return the longest valid chain.

* Each domino is a pair of numbers from 0–6, e.g. `[3, 2]`.
* A chain is valid when the second number of each domino matches the first number of the next.
* The first number of the first domino and the second number of the last one don't need to match anything.
* Any domino can be flipped, so `[3, 2]` can be played as `[2, 3]`.
* There is always exactly one longest valid chain.

For example, given `[[1, 2], [4, 5], [2, 3]]`, return `[[1, 2], [2, 3]]`.

### Tests:

1. `getLongestChain([[1, 2], [4, 5], [2, 3]])` should return `[[1, 2], [2, 3]]`.
2. `getLongestChain([[2, 1], [4, 3], [5, 3]])` should return `[[4, 3], [3, 5]]`.
3. `getLongestChain([[1, 2], [3, 4], [2, 3], [4, 0]])` should return `[[1, 2], [2, 3], [3, 4], [4, 0]]`.
4. `getLongestChain([[6, 6], [6, 1], [1, 1], [0, 3], [2, 3], [4, 1], [5, 6]])` should return `[[4, 1], [1, 1], [1, 6], [6, 6], [6, 5]]`.
5. `getLongestChain([[0, 4], [3, 3], [0, 3], [5, 6], [4, 5], [4, 2], [5, 5], [1, 2], [4, 4]])` should return `[[3, 3], [3, 0], [0, 4], [4, 4], [4, 5], [5, 5], [5, 6]]`.