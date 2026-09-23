# freeCodeCamp Daily Coding Challenge - July 16

## Pig Latin Converter

Given a string, convert it to Pig Latin using the following rules:

* If a word begins with a vowel (`"a"`, `"e"`, `"i"`, `"o"`, or `"u"`), add `"way"` to the end. For example, `"universe"` converts to `"universeway"`.
* If a word begins with one or more consonants, move them to the end and add `"ay"`. For example, `"hello"` converts to `"ellohay"`.
* Preserve the case of the first letter. For example, `"Hello"` converts to `"Ellohay"`.

### Tests:

1. `pigLatin("universe")` should return `"universeway"`.
2. `pigLatin("hello")` should return `"ellohay"`.
3. `pigLatin("hello universe")` should return `"ellohay universeway"`.
4. `pigLatin("Hello universe")` should return `"Ellohay universeway"`.
5. `pigLatin("Pig Latin is fun")` should return `"Igpay Atinlay isway unfay"`.
6. `pigLatin("The quick brown fox jumped over the lazy dog")` should return `"Ethay uickqay ownbray oxfay umpedjay overway ethay azylay ogday"`.