# freeCodeCamp Daily Coding Challenge - May 15, 2026

## Coffee Order Parser

Given a string for a coffee order, identify any menu items and return a formatted order.

Use the following menu items and prices:
|Item               |Price|
|:-----------------:|:---:|
|`"cold brew"`      |$4.50|
|`"oat latte"`      |$5.00|
|`"cappuccino"`     |$4.75|
|`"espresso"`       |$3.00|
|`"vanilla syrup"`  |$0.75|
|`"caramel drizzle"`|$0.60|
|`"extra shot"`     |$0.50|
|`"oat milk"`       |$0.75|
|`"cream"`          |$0.75|

Return a string with the matched items joined by `" + "`, followed by a colon and space (`": "`), and the total price.

For example, given `"I'd like an oat latte with vanilla syrup and an extra shot please."`, return `"oat latte + vanilla syrup + extra shot: $6.25"`

Items should appear in the order they appear in the menu and the total price should always have two decimal places.

### Tests:

1. `formatCoffeeOrder("I'd like an oat latte with vanilla syrup and an extra shot please.")` should return `"oat latte + vanilla syrup + extra shot: $6.25"`.
2. `formatCoffeeOrder("Give me a cappuccino with caramel drizzle, vanilla syrup, and some oat milk.")` should return `"cappuccino + vanilla syrup + caramel drizzle + oat milk: $6.85"`.
3. `formatCoffeeOrder("Can I get a cold brew with some cream and an extra shot.")` should return `"cold brew + extra shot + cream: $5.75"`.
4. `formatCoffeeOrder("Just an espresso please.")` should return `"espresso: $3.00"`.
5. `formatCoffeeOrder("I'll take an oat latte with cream and an extra shot, and some vanilla syrup and caramel drizzle.")` should return `"oat latte + vanilla syrup + caramel drizzle + extra shot + cream: $7.60"`.