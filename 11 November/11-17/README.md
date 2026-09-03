# freeCodeCamp Daily Coding Challenge - November 17, 2025

## Fingerprint Test

Given two strings representing fingerprints, determine if they are a match using the following rules:

* Each fingerprint will consist only of lowercase letters (`a-z`).
* Two fingerprints are considered a match if:
	* They are the same length.
	* The number of differing characters does not exceed 10% of the fingerprint length.

### Tests

1. `isMatch("helloworld", "helloworld")` should return `true`.
2. `isMatch("helloworld", "helloworlds")` should return `false`.
3. `isMatch("helloworld", "jelloworld")` should return `true`.
4. `isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydog")` should return `true`.
5. `isMatch("theslickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazydog")` should return `true`.
6. `isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat")` should return `false`.