# freeCodeCamp Daily Coding Challenge - July 11

## Five Dice
Given an array of five dice with values 1-6, return the best possible hand.

Here are the hands ranked lowest to highest:
|       Hand        |           Description           |
|:-----------------:|:-------------------------------:|
|`"no pair"`        |No pair or better                |
|`"pair"`           |Two dice with the same value     |
|`"two pair"`       |Two different pairs              |
|`"three of a kind"`|Three dice with the same value   |
|`"small straight"` |Four consecutive values          |
|`"large straight"` |Five consecutive values          |
|`"full house"`     |Three of a kind and a pair       |
|`"four of a kind"` |Four dice with the same value    |
|`"five of a kind"` |All five dice with the same value|

### Tests:

1. `fiveDice([1, 1, 1, 1, 1])` should return `"five of a kind"`.
2. `fiveDice([5, 5, 5, 6, 5])` should return `"four of a kind"`.
3. `fiveDice([2, 5, 6, 4, 3])` should return `"large straight"`.
4. `fiveDice([4, 3, 3, 3, 1])` should return `"three of a kind"`.
5. `fiveDice([4, 6, 2, 6, 5])` should return `"pair"`.
6. `fiveDice([1, 4, 5, 6, 2])` should return `"no pair"`.
7. `fiveDice([1, 3, 4, 6, 2])` should return `"small straight"`.
8. `fiveDice([2, 2, 5, 2, 5])` should return `"full house"`.
9. `fiveDice([6, 4, 5, 6, 4])` should return `"two pair"`.