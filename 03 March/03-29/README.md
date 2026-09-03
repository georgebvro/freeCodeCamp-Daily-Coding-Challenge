# freeCodeCamp Daily Coding Challenge - March 29, 2026

## ISBN-10 Validator

Given a string, determine if it's a valid ISBN-10.

An ISBN-10 consists of hyphens (`"-"`) and 10 other characters. After removing the hyphens (`"-"`):
* The first 9 characters must be digits, and
* The final character may be a digit or the letter `"X"`, which represents the number 10.

To validate it:
* Multiply each digit (or value) by its position (multiply the first digit by 1, the second by 2, and so on).
* Add all the results together.
* If the total is divisible by 11, it's valid.

### Tests:

1. `isValidIsbn10("0-306-40615-2")` should return `true`.
2. `isValidIsbn10("0-306-40615-1")` should return `false`.
3. `isValidIsbn10("0-8044-2957-X")` should return `true`.
4. `isValidIsbn10("X-306-40615-2")` should return `false`.
5. `isValidIsbn10("0-6822-2589-4")` should return `true`.