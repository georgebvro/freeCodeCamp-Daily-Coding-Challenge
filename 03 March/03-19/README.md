# freeCodeCamp Daily Coding Challenge - March 19, 2026

## Inverted Matrix

Given a matrix (an array of arrays) filled with two distinct values, return a new matrix where all occurrences of one value are swapped with the other.

For example, given:
```
[
  ["a", "b"],
  ["a", "a"]
]
```

Return:
```
[
  ["b", "a"],
  ["b", "b"]
]
```

### Tests:

1. `invertMatrix([["a", "b"], ["a", "a"]])` should return `[["b", "a"], ["b", "b"]]`.
2. `invertMatrix([[1, 0, 1], [1, 1, 1], [0, 1, 0]])` should return `[[0, 1, 0], [0, 0, 0], [1, 0, 1]]`.
3. `invertMatrix([["apple", "banana", "banana", "apple"], ["banana", "apple", "apple", "banana"], ["banana", "banana", "banana", "apple"]])` should return `[["banana", "apple", "apple", "banana"], ["apple", "banana", "banana", "apple"], ["apple", "apple", "apple", "banana"]]`.
4. `invertMatrix([[6, 7, 7, 7, 6], [7, 6, 7, 6, 7], [7, 7, 6, 7, 7], [7, 6, 7, 6, 7], [6, 7, 7, 7, 6]])` should return `[[7, 6, 6, 6, 7], [6, 7, 6, 7, 6], [6, 6, 7, 6, 6], [6, 7, 6, 7, 6], [7, 6, 6, 6, 7]]`.
5. `invertMatrix([[1.2, 2.1, 2.1, 2.1], [2.1, 1.2, 2.1, 1.2], [1.2, 1.2, 2.1, 2.1]])` should return `[[2.1, 1.2, 1.2, 1.2], [1.2, 2.1, 1.2, 2.1], [2.1, 2.1, 1.2, 1.2]]`.