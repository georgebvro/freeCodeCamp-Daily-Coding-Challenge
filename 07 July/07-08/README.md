# freeCodeCamp Daily Coding Challenge - July 8

## Issue Triage

Given a number of milliseconds since the last post on an issue, and the last message posted on the issue, determine what you should do with the issue according to these rules:

* If the last message is less than 7 days ago, return `"leave it"`
* If the last message is 7 or more days ago and its content contains `"bump"` (case-insensitive), return `"close it"`
* Otherwise, return `"bump it"`

### Tests:

1. `triageIssue(86400000, "Lets fix it")` should return `"leave it"`.
2. `triageIssue(1209600000, "still waiting")` should return `"bump it"`.
3. `triageIssue(864000000, "bump")` should return `"close it"`.
4. `triageIssue(604800000, "Do we still want this?")` should return `"bump it"`.
5. `triageIssue(604800000, "Bumping this")` should return `"close it"`.
6. `triageIssue(345600000, "I'll make a PR")` should return `"leave it"`.