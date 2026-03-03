# freeCodeCamp Daily Coding Challenge - February 26, 2026

## Letter and Number Count

Given a string, return a message with the count of how many letters and numbers it contains.

* Letters are `A-Z` and `a-z`.
* Numbers are `0-9`.
* Ignore all other characters.

Return `"The string has X letters and Y numbers."`, where `"X"` is the count of letters and `"Y"` is the count of numbers. If either count is 1, use the singular form for that item. E.g: `"1 letter"` instead of `"1 letters"` and `"1 number"` instead of `"1 numbers"`.

### Tests

1. `countLettersAndNumbers("helloworld123")` should return `"The string has 10 letters and 3 numbers."`.
2. `countLettersAndNumbers("Catch 22")` should return `"The string has 5 letters and 2 numbers."`.
3. `countLettersAndNumbers("A1!")` should return `"The string has 1 letter and 1 number."`.
4. `countLettersAndNumbers("12345")` should return `"The string has 0 letters and 5 numbers."`.
5. `countLettersAndNumbers("password")` should return `"The string has 8 letters and 0 numbers."`.