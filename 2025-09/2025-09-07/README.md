# freeCodeCamp Daily Coding Challenge - September 7, 2025

## Roman Numeral Parser

Given a string representing a Roman numeral, return its integer value.

Roman numerals consist of the following symbols and values:

|Symbol|Value|
|:----:|:---:|
| I    |    1|
| V    |    5|
| X    |   10|
| L    |   50|
| C    |  100|
| D    |  500|
| M    | 1000|

* Numerals are read left to right. If a smaller numeral appears before a larger one, the value is subtracted. Otherwise, values are added.

### Tests

1. `parseRomanNumeral("III")` should return `3`.
2. `parseRomanNumeral("IV")` should return `4`.
3. `parseRomanNumeral("XXVI")` should return `26`.
4. `parseRomanNumeral("XCIX")` should return `99`.
5. `parseRomanNumeral("CDLX")` should return `460`.
6. `parseRomanNumeral("DIV")` should return `504`.
7. `parseRomanNumeral("MMXXV")` should return `2025`.