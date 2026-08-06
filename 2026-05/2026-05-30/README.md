# freeCodeCamp Daily Coding Challenge - May 30, 2026

## Best Hand

Given an array of five strings representing playing cards, return the name of the best hand.

* Each card is represented as a two-character string: the rank followed by the suit, `"2h"` for example.
	* Ranks, from low to high, are: `"2"`, `"3"`, `"4"`, `"5"`, `"6"`, `"7"`, `"8"`, `"9"`, `"T"`, `"J"`, `"Q"`, `"K"`, and `"A"`.
	* Suits are: `"h"`, `"d"`, `"c"`, and `"s"`.
* Aces (`"A"`) can be used as high or low in a straight.

The hands, in order from worst to best, are:

|Name               |Description                                       |
|:------------------|:-------------------------------------------------|
|`"High Card"`      |No pair or better                                 |
|`"Pair"`           |Two of one rank                                   |
|`"Two Pair"`       |Two of one rank and two of another                |
|`"Three of a Kind"`|Three of one rank                                 |
|`"Straight"`       |Five ranks in a row                               |
|`"Flush"`          |Five of the same suit                             |
|`"Full House"`     |Three of one rank, and two of another             |
|`"Four of a Kind"` |Four of one rank                                  |
|`"Straight Flush"` |Five ranks in a row of the same suit              |
|`"Royal Flush"`    |`"A"`, `"K"`, `"Q"`, `"J"`, `"T"` of the same suit|

Return the name of the best hand.

### Tests:

1. `getBestHand(["7s", "7h", "7d", "2c", "5h"])` should return `"Three of a Kind"`.
2. `getBestHand(["Ks", "Kh", "Kd", "4s", "4h"])` should return `"Full House"`.
3. `getBestHand(["2h", "5h", "7h", "9h", "Jh"])` should return `"Flush"`.
4. `getBestHand(["As", "Ah", "Ad", "Ac", "Kh"])` should return `"Four of a Kind"`.
5. `getBestHand(["Ts", "Th", "9d", "9c", "8h"])` should return `"Two Pair"`.
6. `getBestHand(["9c", "8c", "7c", "6c", "5c"])` should return `"Straight Flush"`.
7. `getBestHand(["As", "Kh", "Jd", "8c", "5h"])` should return `"High Card"`.
8. `getBestHand(["As", "2h", "3d", "4c", "5h"])` should return `"Straight"`.
9. `getBestHand(["Ts", "Th", "7c", "6d", "5h"])` should return `"Pair"`.
10. `getBestHand(["As", "Ks", "Qs", "Js", "Ts"])` should return `"Royal Flush"`.