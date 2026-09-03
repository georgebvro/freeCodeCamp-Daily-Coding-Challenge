# freeCodeCamp Daily Coding Challenge - June 18

## Streaming Cost

Given an array representing movies in the cart of your streaming service, and a string for your subscription tier, return the total cost of the movies.

Each item in the cart is an object with a `"format"` (`"HD"` or `"4K"`) and a `"type"` (`"rent"` or `"buy"`). Their costs are:

|      |`"rent"`|`"buy"`|
|:----:|:------:|:-----:|
|`"HD"`|   $3.99| $12.99|
|`"4K"`|   $5.99| $19.99|

Apply the following subscription tier discounts:
* `"none"`: full price
* `"basic"`: 10% off
* `"premium"`: 25% off

Return the total cost rounded to two decimal places in the format `"$D.CC"`.

### Tests:

1. `getStreamingBill([{ format: "HD", type: "rent" }], "none")` should return `"$3.99"`.
2. `getStreamingBill([{ format: "HD", type: "buy" }], "premium")` should return `"$9.74"`.
3. `getStreamingBill([{ format: "HD", type: "rent" }, { format: "HD", type: "rent" }, { format: "HD", type: "buy" }], "basic")` should return `"$18.87"`.
4. `getStreamingBill([{ format: "4K", type: "buy" }, { format: "4K", type: "buy" }, { format: "4K", type: "buy" }], "premium")` should return `"$44.98"`.
5. `getStreamingBill([{ format: "HD", type: "rent" }, { format: "4K", type: "rent" }, { format: "HD", type: "buy" }, { format: "4K", type: "buy" }], "none")` should return `"$42.96"`.
6. `getStreamingBill([{ format: "HD", type: "rent" }, { format: "4K", type: "rent" }, { format: "HD", type: "buy" }, { format: "4K", type: "buy" }], "basic")` should return `"$38.66"`.