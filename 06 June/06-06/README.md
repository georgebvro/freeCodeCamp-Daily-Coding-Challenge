# freeCodeCamp Daily Coding Challenge - June 6, 2026

## Schema Validator Part 6

Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:
```
Roles = "user" | "creator" | "moderator" | "staff" | "admin"

UserProfile = {
  username: string,
  posts: number,
  verified: boolean,
  role: Roles,
  supporter?: boolean,
  badges: string[]
}

{
  users: UserProfile[]
}
```

* The pipe (`|`) symbol means "or". `role` must be one of the listed `Roles` values.
* The question mark (`?`) after `supporter` means that the field is optional, but is the specified type if it exists.
* The brackets `[]` after `string` means that `badges` should be an array of strings (or empty).
* `UserProfile[]` denotes an array of `UserProfile` objects. An empty array is valid.
* Extra keys are allowed

### Tests:

1. `isValidSchema({ users: [{ username: "ron", posts: 14, verified: true, role: "creator", badges: [ "early-adopter" ]}, { username: "cher", posts: 25, verified: true, role: "moderator", supporter: true, followers: 20, badges: [ "helper" ]}]})` should return `true`.
2. `isValidSchema({ users: [] })` should return `true`.
3. `isValidSchema({ users: { username: "anne", posts: 0, verified: false, role: "user", supporter: false, badges: []}})` should return `false`.
4. `isValidSchema({ users: [{ username: "tony", posts: 10, verified: true, role: "creator", supporter: true, badges: ["liked", 6]}]})` should return `false`.
5. `isValidSchema({ users: [{ username: "ursula", posts: 3, verified: false, role: "user", supporter: "false", badges: ["comeback"]}]})` should return `false`.
6. `isValidSchema({ users: [{ username: "benny", posts: 55, verified: true, role: "superstar", supporter: true, badges: ["veteran"]}]})` should return `false`.
7. `isValidSchema({ users: [{ username: "chase", posts: 1, verified: "yes", role: "staff", supporter: false, badges: ["superstar"]}]})` should return `false`.
8. `isValidSchema({ users: [{ username: "carla", posts: "10", verified: false, role: "user", supporter: false, badges: ["newbie"]}]})` should return `false`.
9. `isValidSchema({ users: [{ posts: 4, verified: false, role: "admin", supporter: false, badges: ["superuser", "veteran"]}]})` should return `false`.
10. `isValidSchema({ users: [{ username: "harold", posts: 80, verified: true, role: "creator", supporter: true, badges: ["liked", "hero"]}, { username: "kim", posts: 11, verified: false, role: "admin", supporter: true, badges: ["first"]}, {}]})` should return `false`.