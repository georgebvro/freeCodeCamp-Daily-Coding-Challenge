# freeCodeCamp Daily Coding Challenge - February 4, 2026

## Truncate the Text

Given a string, return it as-is if it's 20 characters or shorter. If it's longer than 20 characters, truncate it to the first 17 characters and append `"..."` to the end of it (so it's 20 characters total) and return the result.

### Tests

1. `truncateText("Hello, world!")` should return `"Hello, world!"`.
2. `truncateText("This string should get truncated.")` should return `"This string shoul..."`.
3. `truncateText("Exactly twenty chars")` should return `"Exactly twenty chars"`.
4. `truncateText(".....................")` should return `"...................."`.