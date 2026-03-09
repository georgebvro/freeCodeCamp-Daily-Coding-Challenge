# freeCodeCamp Daily Coding Challenge - March 5, 2026

## Smallest Gap

Given a string, return the substring between the two identical characters that have the smallest number of characters between them (smallest gap).

* There will always be at least one pair of matching characters.
* The returned substring should exclude the matching characters.
* If two or more gaps are the same length, return the characters from the first one.

For example, given `"ABCDAC"`, return `"DA"`.

* Only `"A"` and `"C"` repeat in the string.
* The number of characters between the two `"A"` characters is 3, and between the `"C"` characters is 2.
* So return the string between the two `"C"` characters.

### Tests

1. `smallestGap("ABCDAC")` should return `"DA"`.
2. `smallestGap("racecar")` should return `"e"`.
3. `smallestGap("A{5e^SD*F4i!o#q6e&rkf(po8|we9+kr-2!3}=4")` should return `"#q6e&rkf(p"`.
4. `smallestGap("Hello World")` should return `""`.
5. `smallestGap("The quick brown fox jumps over the lazy dog.")` should return `"fox"`.