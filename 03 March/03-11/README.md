# freeCodeCamp Daily Coding Challenge - March 11, 2026

## Word Length Converter

Given a string of words, return a new string where each word is replaced by its length.

* Words in the given string will be separated by a single space
* Keep the spaces in the returned string.

For example, given `"hello world"`, return `"5 5"`.

### Tests:

1. `convertWords("hello world")` should return `"5 5"`.
2. `convertWords("Thanks and happy coding")` should return `"6 3 5 6"`.
3. `convertWords("The quick brown fox jumps over the lazy dog")` should return `"3 5 5 3 5 4 3 4 3"`.
4. `convertWords("Lorem ipsum dolor sit amet consectetur adipiscing elit donec ut ligula vehicula iaculis orci vel semper nisl")` should return `"5 5 5 3 4 11 10 4 5 2 6 8 7 4 3 6 4"`.