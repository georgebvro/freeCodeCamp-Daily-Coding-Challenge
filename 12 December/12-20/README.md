# freeCodeCamp Daily Coding Challenge - December 20, 2025

## Purge Most Frequent

Given an array of values, remove all occurrences of the most frequently occurring element and return the resulting array.

* If multiple values are tied for most frequent, remove all of them.
* Do not change any of the other elements or their order.

### Tests

1. `purgeMostFrequent([1, 2, 2, 3])` should return `[1, 3]`.
2. `purgeMostFrequent(["a", "b", "d", "b", "c", "d", "c", "d", "c", "d"])` should return `["a", "b", "b", "c", "c", "c"]`.
3. `purgeMostFrequent(["red", "blue", "green", "red", "blue", "green", "blue"])` should return `["red", "green", "red", "green"]`.
4. `purgeMostFrequent([5, 5, 5, 5])` should return `[]`.