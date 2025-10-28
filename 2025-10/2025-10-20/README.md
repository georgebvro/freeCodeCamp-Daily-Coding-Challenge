# freeCodeCamp Daily Coding Challenge - October 20, 2025

## Tip Calculator

Given the price of your meal and a custom tip percent, return an array with three tip values; 15%, 20%, and the custom amount.

* Prices will be given in the format: `"$N.NN"`.
* Custom tip percents will be given in this format: `"25%"`.
* Return amounts in the same `"$N.NN"` format, rounded to two decimal places.

For example, given a `"$10.00"` meal price, and a `"25%"` custom tip value, return `["$1.50", "$2.00", "$2.50"]`.

### Tests

1. `calculateTips("$10.00", "25%")` should return `["$1.50", "$2.00", "$2.50"]`.
2. `calculateTips("$89.67", "26%")` should return `["$13.45", "$17.93", "$23.31"]`.
3. `calculateTips("$19.85", "9%")` should return `["$2.98", "$3.97", "$1.79"]`.