# freeCodeCamp Daily Coding Challenge - December 8, 2025

## Pounds to Kilograms

Given a weight in pounds as a number, return the string `"(lbs) pounds equals (kgs) kilograms."`.

* Replace `"(lbs)"` with the input number.
* Replace `"(kgs)"` with the input converted to kilograms, rounded to two decimals and always include two decimal places in the value.
* 1 pound equals 0.453592 kilograms.
* If the input is `1`, use `"pound"` instead of `"pounds"`.
* If the converted value is `1`, use `"kilogram"` instead of `"kilograms"`.

### Tests

1. `convertToKgs(1)` should return `"1 pound equals 0.45 kilograms."`.
2. `convertToKgs(0)` should return `"0 pounds equals 0.00 kilograms."`.
3. `convertToKgs(100)` should return `"100 pounds equals 45.36 kilograms."`.
4. `convertToKgs(2.5)` should return `"2.5 pounds equals 1.13 kilograms."`.
5. `convertToKgs(2.20462)` should return `"2.20462 pounds equals 1.00 kilogram."`.