# freeCodeCamp Daily Coding Challenge - June 2

## Schema Validator Part 2

Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:
```
{
  username: string,
  posts: number,
  verified: boolean
}
```

* Extra keys are allowed

### Tests:

1. `isValidSchema({ username: "alice", posts: 10, verified: false })` should return `true`.
2. `isValidSchema({ username: "carol", posts: 15, verified: true, followers: 25 })` should return `true`.
3. `isValidSchema({ username: "frank", posts: "21", verified: true })` should return `false`.
4. `isValidSchema({ username: "sam", posts: 17, verified: "false" })` should return `false`.
5. `isValidSchema({ username: "bill", verified: true })` should return `false`.
6. `isValidSchema({ username: "fred", verified: true })` should return `false`.
7. `isValidSchema({ username: 5, posts: 10, verified: true })` should return `false`.