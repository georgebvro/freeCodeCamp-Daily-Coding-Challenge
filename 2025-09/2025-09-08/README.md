# freeCodeCamp Daily Coding Challenge - September 8, 2025

## Acronym Builder

Given a string containing one or more words, return an acronym of the words using the following constraints:

* The acronym should consist of the first letter of each word capitalized, unless otherwise noted.
* The acronym should ignore the first letter of these words unless they are the first word of the given string: `a`, `for`, `an`, `and`, `by`, and `of`.
* The acronym letters should be returned in order they are given.
* The acronym should not contain any spaces.

### Tests

1. `buildAcronym("Search Engine Optimization")` should return `"SEO"`.
2. `buildAcronym("Frequently Asked Questions")` should return `"FAQ"`.
3. `buildAcronym("National Aeronautics and Space Administration")` should return `"NASA"`.
4. `buildAcronym("Federal Bureau of Investigation")` should return `"FBI"`.
5. `buildAcronym("For your information")` should return `"FYI"`.
6. `buildAcronym("By the way")` should return `"BTW"`.
7. `buildAcronym("An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily")` should return `"AUHWPOTIMSH"`.