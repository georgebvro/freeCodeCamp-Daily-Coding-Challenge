# freeCodeCamp Daily Coding Challenge - May 4

## Parsec Converter

In a distant galaxy, parsecs are used to measure both time and distance. Given an integer number of parsecs, return its equivalent in time or distance.

* If the given integer is odd, it represents time. If it's even, it represents distance.

Use these conversion rates:

|Parsecs|Time/Distance|
|:-----:|:-----------:|
|   1   |   2 hours   |
|   2   |6 light years|

Return the converted value as an integer.

### Tests:

1. `convertParsecs(1)` should return `2`.
2. `convertParsecs(2)` should return `6`.
3. `convertParsecs(31)` should return `62`.
4. `convertParsecs(88)` should return `264`.
5. `convertParsecs(17)` should return `34`.
6. `convertParsecs(14)` should return `42`.