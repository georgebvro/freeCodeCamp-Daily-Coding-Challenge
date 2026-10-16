# freeCodeCamp Daily Coding Challenge - July 18

## Dice Odds

Given a number of six-sided dice to roll and a target sum, return the odds of rolling that sum as a string in the format `"1 in X"`.

* The number of dice will be between 1 and 6.
* The target sum is always achievable with the given number of dice.
* Round `"X"` to the nearest whole number.

### Tests:

1. `getOdds(1, 5)` should return `"1 in 6"`.
2. `getOdds(2, 4)` should return `"1 in 12"`.
3. `getOdds(3, 10)` should return `"1 in 8"`.
4. `getOdds(4, 7)` should return `"1 in 65"`.
5. `getOdds(5, 26)` should return `"1 in 111"`.
6. `getOdds(6, 35)` should return `"1 in 7776"`.