# freeCodeCamp Daily Coding Challenge - October 3, 2025

## P@ssw0rd Str3ngth!

Given a password string, return `"weak"`, `"medium"`, or `"strong"` based on the strength of the password.

A password is evaluated according to the following rules:

* It is at least 8 characters long.
* It contains both uppercase and lowercase letters.
* It contains at least one number.
* It contains at least one special character from this set: `!`, `@`, `#`, `$`, `%`, `^`, `&`, or `*`.

Return `"weak"` if the password meets fewer than two of the rules. Return `"medium"` if the password meets 2 or 3 of the rules. Return `"strong"` if the password meets all 4 rules.

### Tests

1. `checkStrength("123456")` should return `"weak"`.
2. `checkStrength("pass!!!")` should return `"weak"`.
3. `checkStrength("Qwerty")` should return `"weak"`.
4. `checkStrength("PASSWORD")` should return `"weak"`.
5. `checkStrength("PASSWORD!")` should return `"medium"`.
6. `checkStrength("PassWord%^!")` should return `"medium"`.
7. `checkStrength("qwerty12345")` should return `"medium"`.
8. `checkStrength("PASSWORD!")` should return `"medium"`.
9. `checkStrength("PASSWORD!")` should return `"medium"`.
10. `checkStrength("S3cur3P@ssw0rd")` should return `"strong"`.
11. `checkStrength("C0d3&Fun!")` should return `"strong"`.