# freeCodeCamp Daily Coding Challenge - April 9, 2026

## Next Bingo Number

Given a bingo number, return the next bingo number sequentially.

A bingo number is a single letter followed by a number in its range according to this chart:
|Letter|Number Range|
|:----:|:----------:|
|`"B"` |    1-15    |
|`"I"` |   16-30    |
|`"N"` |   31-45    |
|`"G"` |   46-60    |
|`"O"` |   61-75    |

For example, given `"B10"`, return `"B11"`, the next bingo number. If given the last bingo number, return `"B1"`.

### Tests:

1. `getNextBingoNumber("B10")` should return `"B11"`.
2. `getNextBingoNumber("N33")` should return `"N34"`.
3. `getNextBingoNumber("I30")` should return `"N31"`.
4. `getNextBingoNumber("G60")` should return `"O61"`.
5. `getNextBingoNumber("O75")` should return `"B1"`.