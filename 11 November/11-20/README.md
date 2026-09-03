# freeCodeCamp Daily Coding Challenge - November 20, 2025

## Longest Word

Given a sentence string, return the longest word in the sentence.

* Words are separated by a single space.
* Only letters (`a-z`, case-insensitive) count toward the word's length.
* If there are multiple words with the same length, return the first one that appears.
* Return the word as it appears in the given string, with punctuation removed.

### Tests

1. `longestWord("The quick red fox")` should return `"quick"`.
2. `longestWord("Hello coding challenge.")` should return `"challenge"`.
3. `longestWord("Do Try This At Home.")` should return `"This"`.
4. `longestWord("This sentence... has commas, ellipses, and an exclamation point!")` should return `"exclamation"`.
5. `longestWord("A tie? No way!")` should return `"tie"`.
6. `longestWord("Wouldn't you like to know.")` should return `"Wouldnt"`.