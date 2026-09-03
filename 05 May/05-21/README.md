# freeCodeCamp Daily Coding Challenge - May 21

## I Before E

Given a word or sentence, return a corrected version where every word follows the "I before E except after C" rule.

* If a word contains `"ei"` not preceded by `"c"`, replace it with `"ie"`.
* If a word contains `"ie"` preceded by `"c"`, replace it with `"ei"`.
* All other words are left unchanged.

### Tests:

1. `iBeforeE("beleive")` should return `"believe"`.
2. `iBeforeE("recieve")` should return `"receive"`.
3. `iBeforeE("we recieved a breif")` should return `"we received a brief"`.
4. `iBeforeE("she beleived the friendly niece could percieve the greif")` should return `"she believed the friendly niece could perceive the grief"`.
5. `iBeforeE("we recieved relief after the theif gave us a breif piece of feirce deceit")` should return `"we received relief after the thief gave us a brief piece of fierce deceit"`.