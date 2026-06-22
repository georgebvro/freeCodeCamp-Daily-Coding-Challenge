# freeCodeCamp Daily Coding Challenge - May 1, 2026

## Anagram Groups

Given an array of words, return a 2D array of the words grouped into anagrams.

* Words are anagrams if they contain the same letters in any order.
* Each word belongs to exactly one group.
* Return order doesn't matter.

For example, given `["listen", "silent", "hello", "enlist", "world"]`, return `[["listen", "silent", "enlist"], ["hello"], ["world"]]`.

### Tests:

1. `groupAnagrams(["listen", "silent", "hello", "enlist", "world"])` should return `[["listen", "silent", "enlist"], ["hello"], ["world"]]`.
2. `groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])` should return `[["ate", "eat", "tea"], ["bat"], ["nat", "tan"]]`.
3. `groupAnagrams(["care", "race", "acre", "pots", "stop", "tops", "opts", "post", "spot", "evil", "vile", "live", "veil"])` should return `[["acre", "care", "race"], ["evil", "live", "veil", "vile"], ["opts", "post", "pots", "spot", "stop", "tops"]]`.
4. `groupAnagrams(["algorithms", "logarithms", "education", "cautioned", "auctioned", "triangle", "integral", "alerting", "relating"])` should return `[["alerting", "integral", "relating", "triangle"], ["algorithms", "logarithms"], ["auctioned", "cautioned", "education"]]`.