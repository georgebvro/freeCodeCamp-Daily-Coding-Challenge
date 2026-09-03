# freeCodeCamp Daily Coding Challenge - March 8, 2026

## HSL Validator

Given a string, determine whether it is a valid CSS `hsl()` color value.

* A valid HSL value must be in the format `"hsl(h, s%, l%)"`, where:
	* `h` (hue) must be a number between 0 and 360 (inclusive).
	* `s` (saturation) must be a percentage between 0% and 100%.
	* `l` (lightness) must be a percentage between 0% and 100%.
* Spaces are only allowed:
	* After the opening parenthesis
	* Before and/or after the commas
	* Before and/or after closing parenthesis
* Optionally, the value can end with a semi-colon (`";"`).

For example, `"hsl(240, 50%, 50%)"` is a valid HSL value.

### Tests:

1. `isValidHSL("hsl(240, 50%, 50%)")` should return `true`.
2. `isValidHSL("hsl( 200 , 50% , 75% )")` should return `true`.
3. `isValidHSL("hsl(99,60%,80%);")` should return `true`.
4. `isValidHSL("hsl(0, 0%, 0%) ;")` should return `true`.
5. `isValidHSL("hsl(  10  ,  20%   ,  30%   )    ;")` should return `true`.
6. `isValidHSL("hsl(361, 50%, 80%)")` should return `false`.
7. `isValidHSL("hsl(300, 101%, 70%)")` should return `false`.
8. `isValidHSL("hsl(200, 55%, 75)")` should return `false`.
9. `isValidHSL("hsl (80, 20%, 10%)")` should return `false`.