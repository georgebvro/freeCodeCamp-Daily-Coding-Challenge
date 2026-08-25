# freeCodeCamp Daily Coding Challenge - June 26, 2026

## Blood Bank

Given an array of the inventory at a blood bank and an array of patient blood type requests, return a string in the format `"X of Y patients served"`. Where `X` is the maximum number of patients that can receive blood from the bank's inventory, and `Y` is the total number of patients.

Each entry in both arrays is one of the following blood types: `"AB"`, `"A"`, `"B"`, or `"O"`.

Compatibility rules:
* `"AB"` can receive from any blood type.
* `"A"` can receive from `"A"` and `"O"`.
* `"B"` can receive from `"B"` and `"O"`.
* `"O"` can only receive from `"O"`.

Duplicate entries in the given arrays represent quantity.

### Tests:

1. `triageBlood(["O", "A", "B", "AB"], ["O", "A", "B", "AB"])` should return `"4 of 4 patients served"`.
2. `triageBlood(["A", "A", "B", "B", "AB"], ["O", "A", "B", "B", "B"])` should return `"3 of 5 patients served"`.
3. `triageBlood(["O", "A", "B", "AB"], ["AB", "AB", "AB", "AB", "AB"])` should return `"4 of 5 patients served"`.
4. `triageBlood(["O", "O", "O", "O", "O"], ["O", "A", "B", "AB"])` should return `"4 of 4 patients served"`.
5. `triageBlood(["A", "O", "B", "AB", "B", "AB", "O", "A", "A"], ["O", "A", "B", "AB", "A", "B", "A", "A", "B", "A", "B"])` should return `"8 of 11 patients served"`.
6. `triageBlood(["O", "B", "AB", "AB", "O", "A", "A", "AB", "O", "B", "B", "AB", "A", "B", "AB"], ["O", "A", "B", "B", "A", "B", "AB", "A", "B", "A", "O", "AB", "AB", "O"])` should return `"13 of 14 patients served"`.