# freeCodeCamp Daily Coding Challenge - June 5

## Schema Validator Part 5

Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:
```
Roles = "user" | "creator" | "moderator" | "staff" | "admin"

{
  username: string,
  posts: number,
  verified: boolean,
  role: Roles,
  supporter?: boolean,
  badges: string[]
}
```

* The pipe (`|`) symbol means "or". `role` must be one of the listed `Roles` values.
* The question mark (`?`) after `supporter` means that the field is optional, but is the specified type if it exists.
* The brackets `[]` after `string` means that `badges` should be an array of strings (or empty).
* Extra keys are allowed

### Tests:

1. `isValidSchema({ username: "gill", posts: 12, verified: false, role: "creator", supporter: false, badges: [ "early-adopter", "popular" ] })` should return `true`.
2. `isValidSchema({ username: "tonya", posts: 299, verified: true, role: "moderator", supporter: true, badges: [ "streak-master", "veteran" ], followers: 1233 })` should return `true`.
3. `isValidSchema({ username: "zara", posts: 0, verified: false, role: "user", supporter: false, badges: [] })` should return `true`.
4. `isValidSchema({ username: "nicole", posts: 65, verified: true, role: "admin", supporter: false, badges: [ "first-post", 18 ] })` should return `false`.
5. `isValidSchema({ username: "tim", posts: 25, verified: true, role: "staff", supporter: false })` should return `false`.
6. `isValidSchema({ username: "charlie", posts: 0, verified: false, role: "user", supporter: "no", badges: [ "first-post", "anniversary" ] })` should return `false`.
7. `isValidSchema({ username: "wanda", posts: 15, verified: true, role: "friend", supporter: true, badges: [ "popular" ] })` should return `false`.
8. `isValidSchema({ username: "guy", posts: 5, verified: "false", role: "staff", supporter: true, badges: [ "helper" ] })` should return `false`.
9. `isValidSchema({ username: "carrie", verified: true, role: "moderator", supporter: true, badges: [ "helper", "sharer" ] })` should return `false`.
10. `isValidSchema({ username: true, posts: 75, verified: true, role: "creator", supporter: true, badges: [ "veteran" ] })` should return `false`.