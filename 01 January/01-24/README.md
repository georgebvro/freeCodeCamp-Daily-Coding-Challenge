# freeCodeCamp Daily Coding Challenge - January 24, 2026

## Bingo! Letter

Given a number, return the bingo letter associated with it (capitalized). Bingo numbers are grouped as follows:

|Letter|Number Range|
|:----:|:----------:|
|`"B"` |    1-15    |
|`"I"` |   16-30    |
|`"N"` |   31-45    |
|`"G"` |   46-60    |
|`"O"` |   61-75    |

### Tests

1. `getBingoLetter(75)` should return `"O"`.
2. `getBingoLetter(54)` should return `"G"`.
3. `getBingoLetter(25)` should return `"I"`.
4. `getBingoLetter(38)` should return `"N"`.
5. `getBingoLetter(11)` should return `"B"`.