# freeCodeCamp Daily Coding Challenge - March 18, 2026

## Largest Number

Given a string of numbers separated by various punctuation, return the largest number.

* The given string will only contain numbers and separators.
* Separators can be commas (`","`), exclamation points (`"!"`), question marks (`"?"`), colons (`":"`), or semi-colons (`";"`).

### Tests:

1. `largestNumber("1,2")` should return `2`.
2. `largestNumber("4;15:60,26?52!0")` should return `60`.
3. `largestNumber("-402,-1032!-569:-947;-633?-800!-1012;-402,-723?-8102!-3011")` should return `-402`.
4. `largestNumber("12;-50,99.9,49.1!-10.1?88?16")` should return `99.9`.