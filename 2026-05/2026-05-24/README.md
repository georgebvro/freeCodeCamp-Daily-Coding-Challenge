# freeCodeCamp Daily Coding Challenge - May 24, 2026

## Roman Numeral Fixer

Given a string of malformed Roman numerals, return the value in standard Roman numeral notation.

The input will only use additive notation, so each symbol adds its value to the total. As a reminder, here are the symbols and values:

|Symbol|Value|
|:----:|:---:|
|`"I"` |    1|
|`"V"` |    5|
|`"X"` |   10|
|`"L"` |   50|
|`"C"` |  100|
|`"D"` |  500|
|`"M"` | 1000|

When re-encoding, use the largest possible symbol at each step, using subtractive pairs (`"IV"`, `"IX"`, `"XL"`, `"XC"`, `"CD"`, `"CM"`) where needed.

### Tests:

1. `fixNumerals("XIIIII")` should return `"XV"`.
2. `fixNumerals("IIIILX")` should return `"LXIV"`.
3. `fixNumerals("XXVVVIIIII")` should return `"XL"`.
4. `fixNumerals("MDCCLXXXXVIIII")` should return `"MDCCXCIX"`.
5. `fixNumerals("IIIIVVVVXXXXLLLLCCDD")` should return `"MCDLXIV"`.
6. `fixNumerals("ILCDMIVDIIXLCVCXDL")` should return `"MMCMLXXXIV"`.