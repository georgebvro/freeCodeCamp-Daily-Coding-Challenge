# freeCodeCamp Daily Coding Challenge - January 30, 2026

## Valid Pawn Moves

Given the position of one of your pawns on a chessboard, return an array of all the valid squares it can move to in ascending order.

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

For this challenge:
* You are the player on the bottom of the board.
* Pawns can only move one square "up".
* Unless the pawn is in the starting row (row 2), then it can move one or two squares up.

For example, given `"D4"`, return `["D5"]`, the only square your pawn can move to. Given `"B2"`, return `["B3", "B4"]`, because it's on the starting row and needs to be in ascending order.

### Tests

1. `findPawnMoves("D4")` should return `["D5"]`.
2. `findPawnMoves("B2")` should return `["B3", "B4"]`.
3. `findPawnMoves("A7")` should return `["A8"]`.
4. `findPawnMoves("G2")` should return `["G3", "G4"]`.
5. `findPawnMoves("E3")` should return `["E4"]`.