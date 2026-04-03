# freeCodeCamp Daily Coding Challenge - March 15, 2026

## Captured Chess Pieces

Given an array of strings representing chess pieces you still have on the board, calculate the value of the pieces your opponent has captured.

In chess, you start with 16 pieces:

|Piece |Abbreviation|Quantity|Value|
|:----:|:----------:|:------:|:---:|
|Pawn  |   `"P"`    |   8    |  1  |
|Rook  |   `"R"`    |   2    |  5  |
|Knight|   `"N"`    |   2    |  3  |
|Bishop|   `"B"`    |   2    |  3  |
|Queen |   `"Q"`    |   1    |  9  |
|King  |   `"K"`    |   1    |  0  |

* The given array will only contain the abbreviations above.
* Any of the 16 pieces not included in the given array have been captured.
* Return the total value of all captured pieces, unless...
* If the King has been captured, return `"Checkmate"`.

### Tests:

1. `getCapturedValue(["P", "P", "P", "P", "P", "P", "R", "R", "N", "B", "Q", "K"])` should return `8`.
2. `getCapturedValue(["P", "P", "P", "P", "P", "R", "B", "K"])` should return `26`.
3. `getCapturedValue(["K", "P", "P", "N", "P", "P", "R", "P", "B", "P", "N", "B"])` should return `16`.
4. `getCapturedValue(["P", "Q", "N", "P", "P", "B", "K", "P", "R", "R", "P", "P", "B", "P"])` should return `4`.
5. `getCapturedValue(["P", "K"])` should return `38`.
6. `getCapturedValue(["N", "P", "P", "B", "K", "P", "Q", "N", "P", "P", "R", "R", "P", "P", "P", "B"])` should return `0`.
7. `getCapturedValue(["N", "P", "P", "B", "P", "R", "Q", "P", "P", "P", "B"])` should return `"Checkmate"`.