# freeCodeCamp Daily Coding Challenge - July 3, 2026

## Database Migration

Given two database objects, return the second object with any missing properties from the first filled in.

* Fields that already exist in the record should not be overwritten.

### Tests:

1. `migrateRecord({ username: "", posts: 0 }, { verified: true })` should return `{ username: "", posts: 0, verified: true }`.
2. `migrateRecord({ username: "", posts: 0 }, { username: "camper", posts: 5 })` should return `{ username: "camper", posts: 5 }`.
3. `migrateRecord({ username: "", posts: 0, verified: false }, { username: "camper" })` should return `{ username: "camper", posts: 0, verified: false }`.
4. `migrateRecord({ username: "", posts: 0 }, { username: "camper", role: "admin" })` should return `{ username: "camper", role: "admin", posts: 0 }`.
5. `migrateRecord({ username: "", email: "", posts: 0, verified: false, role: "user", banned: false }, { username: "camper", email: "camper@freecodecamp.org", role: "admin" })` should return `{ username: "camper", email: "camper@freecodecamp.org", role: "admin", posts: 0, verified: false, banned: false }`.