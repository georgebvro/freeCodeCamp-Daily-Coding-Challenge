# freeCodeCamp Daily Coding Challenge - December 7, 2025

## String Compression

Given a string sentence, return a compressed version of the sentence where consecutive duplicate words are replaced by the word followed with the number of times it repeats in parentheses.

* Only consecutive duplicates are compressed.
* Words are separated by single spaces.

For example, given `"yes yes yes please"`, return `"yes(3) please"`.

### Tests

1. `compressString("yes yes yes please")` should return `"yes(3) please"`.
2. `compressString("I have have have apples")` should return `"I have(3) apples"`.
3. `compressString("one one three and to the the the the")` should return `"one(2) three and to the(4)"`.
4. `compressString("route route route route route route tee tee tee tee tee tee")` should return `"route(6) tee(6)"`.