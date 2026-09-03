# freeCodeCamp Daily Coding Challenge - May 20

## String Zipper

Given two strings, return a new string that interleaves their characters one at a time. If one string is longer, append the remaining characters at the end.

Begin with the first character of the first string.

### Tests:

1. `zipStrings("abc", "123")` should return `"a1b2c3"`.
2. `zipStrings("acegikmoqsuwy", "bdfhjlnprtvxz")` should return `"abcdefghijklmnopqrstuvwxyz"`.
3. `zipStrings("day", "night")` should return `"dnaiyght"`.
4. `zipStrings("python", "javascript")` should return `"pjyatvhaosncript"`.
5. `zipStrings("feCdCm", "reoeap")` should return `"freeCodeCamp"`.