# freeCodeCamp Daily Coding Challenge - April 20

## Acronym Finder

Given a string representing an acronym, return the full name of the organization it belongs to from the list below:

* `"National Avocado Storage Authority"`
* `"Cats Infiltration Agency"`
* `"Fluffy Beanbag Inspectors"`
* `"Department Of Jelly"`
* `"Wild Honey Organization"`
* `"Eating Pancakes Administration"`

Each letter in the given acronym should match the first letter of each word in the organization it belongs to, in the same order.

### Tests:

1. `findOrg("NASA")` should return `"National Avocado Storage Authority"`.
2. `findOrg("CIA")` should return `"Cats Infiltration Agency"`.
3. `findOrg("FBI")` should return `"Fluffy Beanbag Inspectors"`.
4. `findOrg("DOJ")` should return `"Department Of Jelly"`.
5. `findOrg("WHO")` should return `"Wild Honey Organization"`.
6. `findOrg("EPA")` should return `"Eating Pancakes Administration"`.