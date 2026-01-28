# freeCodeCamp Daily Coding Challenge - January 20, 2026

## Consonant Case

Given a string representing a variable name, convert it to consonant case using the following rules:
* All consonants should be converted to uppercase.
* All vowels (`a`, `e`, `i`, `o`, `u` in any case) should be converted to lowercase.
* All hyphens (`-`) should be converted to underscores (`_`).

### Tests

1. `toConsonantCase("helloworld")` should return `"HeLLoWoRLD"`.
2. `toConsonantCase("HELLOWORLD")` should return `"HeLLoWoRLD"`.
3. `toConsonantCase("_hElLO-WOrlD-")` should return `"_HeLLo_WoRLD_"`.
4. `toConsonantCase("_~-generic_~-variable_~-name_~-here-~_")` should return `"_~_GeNeRiC_~_VaRiaBLe_~_NaMe_~_HeRe_~_"`.