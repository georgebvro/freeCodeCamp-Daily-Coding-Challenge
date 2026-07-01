# freeCodeCamp Daily Coding Challenge - May 10, 2026

## ISBN-13 Validator

Given a string, determine if it is a valid ISBN-13 number.

A valid ISBN-13:
* Contains only digits and hyphens
* Has exactly 13 digits after removing hyphens
* Passes the following check:
1. Multiply each digit by 1 or 3, alternating (multiply the first digit by 1, the second by 3, the third by 1, and so on).
2. The sum of the results must be divisible by 10.

### Tests:

1. `isValidIsbn13("9780306406157")` should return `true`.
2. `isValidIsbn13("97803064061570")` should return `false`.
3. `isValidIsbn13("978-0-13-595705-9")` should return `true`.
4. `isValidIsbn13("978-030-64061A-4")` should return `false`.
5. `isValidIsbn13("9-7-8-0-1-3-4-7-5-7-5-9-9")` should return `true`.