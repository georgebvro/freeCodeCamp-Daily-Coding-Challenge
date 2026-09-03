# freeCodeCamp Daily Coding Challenge - April 2, 2026

## Capitalized Fibonacci

Given a string, return a new string where each letter is capitalized if its index is a Fibonacci number, and lowercased otherwise.

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The first 10 numbers in the sequence are `0`, `1`, `1`, `2`, `3`, `5`, `8`, `13`, `21`, `34`.

* The first character is at index `0`.
* If the index of non-letter characters is a Fibonacci number, leave it unchanged.

### Tests:

1. `capitalizeFibonacci("hello world")` should return `"HELLo woRld"`.
2. `capitalizeFibonacci("HELLO WORLD")` should return `"HELLo woRld"`.
3. `capitalizeFibonacci("hello, world!")` should return `"HELLo, wOrld!"`.
4. `capitalizeFibonacci("The quick brown fox jumped over the lazy dog.")` should return `"THE qUicK broWn fox jUmped over thE lazy dog."`.
5. `capitalizeFibonacci("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar ex nibh, vel ullamcorper ligula egestas quis. Integer tincidunt fringilla accumsan. Integer et metus placerat, gravida felis at, pellentesque nisl.")` should return `"LOREm ipSum dOlor sit amet, consecTetur adipiscing elit. proin pulvinar ex nibh, vel ullaMcorper ligula egestas quis. integer tincidunt fringillA accumsan. integer et metus placerat, gravida felis at, pellentesque nisl."`.