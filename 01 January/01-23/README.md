# freeCodeCamp Daily Coding Challenge - January 23, 2026

## Hex Validator

Given a string, determine whether it is a valid CSS hex color. A valid CSS hex color must:
* Start with a `#`, and
* be followed by either 3 or 6 hexadecimal characters.

Hexadecimal characters are numbers `0` through `9` and letters `a` through `f` (case-insensitive).

### Tests

1. `isValidHex("#123")` should return `true`.
2. `isValidHex("#123abc")` should return `true`.
3. `isValidHex("#ABCDEF")` should return `true`.
4. `isValidHex("#0a1B2c")` should return `true`.
5. `isValidHex("#12G")` should return `false`.
6. `isValidHex("#1234567")` should return `false`.
7. `isValidHex("#12 3")` should return `false`.
8. `isValidHex("fff")` should return `false`.