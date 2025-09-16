# freeCodeCamp Daily Coding Challenge - September 14, 2025

## Word Frequency

Given a paragraph, return an array of the three most frequently occurring words.

* Words in the paragraph will be separated by spaces.
* Ignore case in the given paragraph. For example, treat `Hello` and `hello` as the same word.
* Ignore punctuation in the given paragraph. Punctuation consists of commas (`,`), periods (`.`), and exclamation points (`!`).
* The returned array should have all lowercase words.
* The returned array should be in descending order with the most frequently occurring word first.

### Tests

1. `getWords("Coding in Python is fun because coding Python allows for coding in Python easily while coding")` should return `["coding", "python", "in"]`.
2. `getWords("I like coding. I like testing. I love debugging!")` should return `["i", "like", "coding"]`.
3. `getWords("Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!")` should return `["debug", "test", "deploy"]`.