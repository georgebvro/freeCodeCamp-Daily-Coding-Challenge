# freeCodeCamp Daily Coding Challenge - July 22

## Piggy Bank

Given an object representing a piggy bank, return the total value as a string formatted as `"$D.CC"`.

The object may contain any of the following:
|   Coin   |Value|
|:--------:|:---:|
|`pennies` |$0.01|
|`nickels` |$0.05|
|`dimes`   |$0.10|
|`quarters`|$0.25|

### Tests:

1. `piggyBank({ pennies: 3, nickels: 5, dimes: 2, quarters: 6 })` should return `"$1.98"`.
2. `piggyBank({ pennies: 1, nickels: 1, dimes: 1, quarters: 1 })` should return `"$0.41"`.
3. `piggyBank({ nickels: 8, dimes: 6, quarters: 5 })` should return `"$2.25"`.
4. `piggyBank({})` should return `"$0.00"`.
5. `piggyBank({ pennies: 146, nickels: 11, dimes: 0, quarters: 19 })` should return `"$6.76"`.