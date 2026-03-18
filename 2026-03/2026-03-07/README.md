# freeCodeCamp Daily Coding Challenge - March 7, 2026

## Element Size

Given a window size, the width of an element in viewport width `"vw"` units, and the height of an element in viewport height `"vh"` units, determine the size of the element in pixels.

* The given window size and returned element size are strings in the format `"width x height"`, `"1200 x 800"` for example.
* `"vw"` units are the percent of window width. `"50vw"` for example, is 50% of the width of the window.
* `"vh"` units are the percent of window height. `"50vh"` for example, is 50% of the height of the window.

### Tests:

1. `getElementSize("1200 x 800", "50vw", "50vh")` should return `"600 x 400"`.
2. `getElementSize("320 x 480", "25vw", "50vh")` should return `"80 x 240"`.
3. `getElementSize("1000 x 500", "7vw", "3vh")` should return `"70 x 15"`.
4. `getElementSize("1920 x 1080", "95vw", "100vh")` should return `"1824 x 1080"`.
5. `getElementSize("1200 x 800", "0vw", "0vh")` should return `"0 x 0"`.
6. `getElementSize("1440 x 900", "100vw", "114vh")` should return `"1440 x 1026"`.