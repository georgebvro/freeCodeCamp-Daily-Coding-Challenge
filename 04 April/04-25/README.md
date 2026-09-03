# freeCodeCamp Daily Coding Challenge - April 25

## Word Decompressor

Given a compressed string, return the decompressed version using the following rules:

* The given string is made up of words and numbers separated by spaces.
* Leave the words unchanged.
* Replace numbers with the word at that position, where the first word is at position 1.

For example, given `"practice makes perfect and 3 1 2 3"`, return `"practice makes perfect and perfect practice makes perfect"`.

### Tests:

1. `decompress("practice makes perfect and 3 1 2 3")` should return `"practice makes perfect and perfect practice makes perfect"`.
2. `decompress("hello 1 1")` should return `"hello hello hello"`.
3. `decompress("the cat sat on 1 mat 4 which 1 2 3")` should return `"the cat sat on the mat on which the cat sat"`.
4. `decompress("the more you know 1 2 3 realize 3 don't 4")` should return `"the more you know the more you realize you don't know"`.
5. `decompress("lorem ipsum dolor sit per elit donec 4 nostra libero 5 7 ligula 4 gravida at 6 vitae a 6 sodales 7 en 7 16 3 nam 13 dignissim risus 16 13 5 27 2 2 15 23 6 5 2 13 23 15 5 21 4 16 27 1 4 5 10 23 2 6 4 21 4 30 6 30 2 6 16 15 18 23 29 27 4 18 sollicitudin 5 9 5 4 10")` should return `"lorem ipsum dolor sit per elit donec sit nostra libero per donec ligula sit gravida at elit vitae a elit sodales donec en donec at dolor nam ligula dignissim risus at ligula per nam ipsum ipsum gravida en elit per ipsum ligula en gravida per sodales sit at nam lorem sit per libero en ipsum elit sit sodales sit risus elit risus ipsum elit at gravida vitae en dignissim nam sit vitae sollicitudin per nostra per sit libero"`.