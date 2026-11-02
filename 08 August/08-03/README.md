# freeCodeCamp Daily Coding Challenge - August 3

## Emoji Translator

Given a string of emojis, return the phrase using the following table:

|Emoji |  Word   |
|:----:|:-------:|
|  👶  |`"baby"` |
|  🐱  |`"cat"`  |
|  🐕  |`"dog"`  |
|  🐟  |`"fish"` |
|  🥵  |`"hot"`  |
|  🧊  |`"ice"`  |
|  🪨   |`"rock"` |
|  🦈  |`"shark"`|
|  🍲  |`"soup"` |
|  ⭐   |`"star"` |

Return the words separated by spaces.

### Tests:

1. `getEmojiPhrase("🪨⭐")` should return `"rock star"`.
2. `getEmojiPhrase("🥵🐕")` should return `"hot dog"`.
3. `getEmojiPhrase("👶🦈")` should return `"baby shark"`.
4. `getEmojiPhrase("⭐🐟")` should return `"star fish"`.
5. `getEmojiPhrase("🧊🧊👶")` should return `"ice ice baby"`.
6. `getEmojiPhrase("🐱🐟🍲")` should return `"cat fish soup"`.