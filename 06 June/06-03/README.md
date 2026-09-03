# freeCodeCamp Daily Coding Challenge - June 3

## Schema Validator Part 3

Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:
```
Roles = "user" | "creator" | "moderator" | "staff" | "admin"

{
  username: string,
  posts: number,
  verified: boolean,
  role: Roles
}
```

* The pipe (`|`) symbol means "or". `role` must be one of the listed `Roles` values.
* Extra keys are allowed

### Tests:

1. `isValidSchema({ username: "henry", posts: 0, verified: true, role: "staff" })` should return `true`.
2. `isValidSchema({ username: "sara", posts: 45, verified: false, role: "creator", followers: 70 })` should return `true`.
3. `isValidSchema({ username: "penelope", posts: 20, verified: true, role: "admin" })` should return `true`.
4. `isValidSchema({ username: "kevin", posts: 0, verified: false, role: "user" })` should return `true`.
5. `isValidSchema({ username: "george", posts: 15, verified: true, role: "moderator" })` should return `true`.
6. `isValidSchema({ username: "david", posts: 0, verified: false, role: "guest" })` should return `false`.
7. `isValidSchema({ username: "wendy", posts: 10, verified: true })` should return `false`.
8. `isValidSchema({ username: "fabian", posts: 1, verified: true, role: true })` should return `false`.
9. `isValidSchema({ username: 8, posts: 1, verified: true, role: "user" })` should return `false`.
10. `isValidSchema({ username: "penny", posts: "10", verified: true, role: "staff" })` should return `false`.
11. `isValidSchema({ username: "john", posts: "1", verified: "true", role: "admin" })` should return `false`.