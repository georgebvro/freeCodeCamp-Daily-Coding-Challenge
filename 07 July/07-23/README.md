# freeCodeCamp Daily Coding Challenge - July 23

## Game Theory

Given two equal length strings representing two players' strategies for a game, return the scores as an array `[player1, player2]`.

* The given strings will only contain one of two letters: `"C"` (cooperate) or `"D"` (defect).
* Each character represents one round, scored as follows:
	* If both players cooperate, each scores 3.
	* If both players defect, each scores 1.
	* If one player defects and the other cooperates, the defector scores 5 and the cooperator scores 0.

### Tests:

1. `playGame("CCCC", "CCCC")` should return `[12, 12]`.
2. `playGame("DDDD", "DDDD")` should return `[4, 4]`.
3. `playGame("CCDD", "CDDD")` should return `[5, 10]`.
4. `playGame("CCCDCDCCCDDC", "CCDDCDCDDCCD")` should return `[24, 34]`.
5. `playGame("DDCCDDDDCDDCDDDCDD", "CCDCCCDCCCDCCCCDCC")` should return `[66, 21]`.