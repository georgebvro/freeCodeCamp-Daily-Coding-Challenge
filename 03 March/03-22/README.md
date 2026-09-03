# freeCodeCamp Daily Coding Challenge - March 22, 2026

## Coffee Roast Detector

Given a string representing the beans used to make a cup of coffee, determine the roast of the cup.

* The given string will contain the following characters, each representing a type of bean:
	* An apostrophe (`'`) is a light roast bean worth 1 point each.
	* A dash (`-`) is a medium roast bean worth 2 points each.
	* A period (`.`) is a dark roast bean worth 3 points each.

* The roast level is determined by the average of all the beans.

Return:
* `"Light"` if the average is less than 1.75.
* `"Medium"` if the average is 1.75 to 2.5.
* `"Dark"` if the average is greater than 2.5.

### Tests:

1. `detectRoast("''-''''''-'-''--''''")` should return `"Light"`.
2. `detectRoast(".'-''-''..'''.-.-''-")` should return `"Medium"`.
3. `detectRoast("--.''--'-''.--..-.--")` should return `"Medium"`.
4. `detectRoast("-...'-......-..-...-")` should return `"Dark"`.
5. `detectRoast(".--.-..-......----.'")` should return `"Medium"`.
6. `detectRoast("..-..-..-..-....-.-.")` should return `"Dark"`.
7. `detectRoast("-'-''''''..-'.''-'.'")` should return `"Light"`.