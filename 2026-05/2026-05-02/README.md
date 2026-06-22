# freeCodeCamp Daily Coding Challenge - May 2, 2026

## Deepest Brackets
Given a string containing balanced brackets, return the content of the deepest nested brackets.

* Brackets can be any of the three types: `()`, `[]`, and `{}`.
* The input will always have a single deepest group.

For example, given `"(hello (world))"`, return `"world"`.

### Tests:

1. `getDeepestBrackets("(hello (world))")` should return `"world"`.
2. `getDeepestBrackets("[outer [inner] outer]")` should return `"inner"`.
3. `getDeepestBrackets("{a{b}c{d{e}f}g}")` should return `"e"`.
4. `getDeepestBrackets("[the {quick (brown [fox] jumped) over (the) lazy} dog]")` should return `"fox"`.
5. `getDeepestBrackets("f[(r)e{e}C{o[(d){e(C)}a]m}]p")` should return `"C"`.