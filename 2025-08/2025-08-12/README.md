# freeCodeCamp Daily Coding Challenge - August 12, 2025

## Base Check

Given a string representing a number, and an integer base from 2 to 36, determine whether the number is valid in that base.

* The string may contain integers, and uppercase or lowercase characters.
* The check should be case-insensitive.
* The base can be any number 2-36.
* A number is valid if every character is a valid digit in the given base.
* Example of valid digits for bases:
  * Base 2: 0-1
  * Base 8: 0-7
  * Base 10: 0-9
  * Base 16: 0-9 and A-F
  * Base 36: 0-9 and A-Z

### Tests

1. `isValidNumber("10101", 2)` should return `true`.
2. `isValidNumber("10201", 2)` should return `false`.
3. `isValidNumber("76543210", 8)` should return `true`.
4. `isValidNumber("9876543210", 8)` should return `false`.
5. `isValidNumber("9876543210", 10)` should return `true`.
6. `isValidNumber("ABC", 10)` should return `false`.
7. `isValidNumber("ABC", 16)` should return `true`.
8. `isValidNumber("Z", 36)` should return `true`.
9. `isValidNumber("ABC", 20)` should return `true`.
10. `isValidNumber("4B4BA9", 16)` should return `true`.
11. `isValidNumber("5G3F8F", 16)` should return `false`.
12. `isValidNumber("5G3F8F", 17)` should return `true`.
13. `isValidNumber("abc", 10)` should return `false`.
14. `isValidNumber("abc", 16)` should return `true`.
15. `isValidNumber("AbC", 16)` should return `true`.
16. `isValidNumber("z", 36)` should return `true`.