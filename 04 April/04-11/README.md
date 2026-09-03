# freeCodeCamp Daily Coding Challenge - April 11, 2026

## Rook and Bishop Attack

Given a string for the location of a rook on a chess board, and another for the location of a bishop, determine if one piece can attack another.

A standard chessboard is 8x8, with columns labeled `A` through `H` (left to right) and rows labeled `1` through `8` (bottom to top). It looks like this:

|__A8__|__B8__|__C8__|__D8__|__E8__|__F8__|__G8__|__H8__|
|  -   |  -   |  -   |  -   |  -   |  -   |  -   |  -   |
|__A7__|__B7__|__C7__|__D7__|__E7__|__F7__|__G7__|__H7__|
|__A6__|__B6__|__C6__|__D6__|__E6__|__F6__|__G6__|__H6__|
|__A5__|__B5__|__C5__|__D5__|__E5__|__F5__|__G5__|__H5__|
|__A4__|__B4__|__C4__|__D4__|__E4__|__F4__|__G4__|__H4__|
|__A3__|__B3__|__C3__|__D3__|__E3__|__F3__|__G3__|__H3__|
|__A2__|__B2__|__C2__|__D2__|__E2__|__F2__|__G2__|__H2__|
|__A1__|__B1__|__C1__|__D1__|__E1__|__F1__|__G1__|__H1__|

* Rooks can move as many squares as they want in a horizontal or vertical direction.
* Bishops can move as many squares as they want in any diagonal direction.
* One piece can attack another if it can move to the location of that piece.

Return:
* `"rook"` if the rook can attack the bishop.
* `"bishop"` if the bishop can attack the rook.
* `"neither"` if neither piece can attack one another.

### Tests:

1. `rookBishopAttack("A1", "A5")` should return `"rook"`.
2. `rookBishopAttack("C3", "F6")` should return `"bishop"`.
3. `rookBishopAttack("D4", "D7")` should return `"rook"`.
4. `rookBishopAttack("B7", "H1")` should return `"bishop"`.
5. `rookBishopAttack("B3", "C5")` should return `"neither"`.
6. `rookBishopAttack("G3", "E8")` should return `"neither"`.