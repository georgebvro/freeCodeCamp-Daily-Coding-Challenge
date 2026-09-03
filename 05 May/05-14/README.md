# freeCodeCamp Daily Coding Challenge - May 14

## Mirror Image

Given two strings, determine if the second string is a mirror image of the first.

A mirror image is formed by reversing the string and replacing each character with its mirror equivalent.

* Symmetric characters look like themselves in a mirror:

`W`, `T`, `Y`, `U`, `I`, `O`, `H`, `A`, `X`, `V`, `M`, `w`, `o`, `x`, `v`, `0`, `8`, `=`, `+`, `:`, `|`, `-`, `_`, `*`, `^`, `!`, `.`, and the space (` `).

* Mirrored pairs swap with each other in a mirror:

|Character|Swaps with|
|:-------:|:--------:|
|   `[`   |    `]`   |
|   `{`   |    `}`   |
|   `<`   |    `>`   |
|   `b`   |    `d`   |
|   `p`   |    `q`   |
|   `(`   |    `)`   |

If either string includes a character not in the lists above, it doesn't have mirror image that can be created from the characters.

For example, the mirrored image of `"[HOW]"` is `"[WOH]"`.

### Tests:

1. `isMirrorImage("[HOW]", "[WOH]")` should return `true`.
2. `isMirrorImage("MOM", "MOM")` should return `true`.
3. `isMirrorImage("vow", "wov")` should return `true`.
4. `isMirrorImage("TIM", "TIM")` should return `false`.
5. `isMirrorImage("{WOW}", "}WOW{")` should return `false`.
6. `isMirrorImage("XXVII", "IIV%X")` should return `false`.
7. `isMirrorImage("><(((*>", "<*)))><")` should return `true`.
8. `isMirrorImage("WTYUIOHAXVMwoxv08=+:|-_*^!.[]{}<>bdpq()", "()pqbd<>{}[].!^*_-|:+=80vxowMVXAHOIUYTW")` should return `true`.