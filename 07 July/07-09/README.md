# freeCodeCamp Daily Coding Challenge - July 9

## Issue Triage 2

Given an issue title and an array of current labels, return an updated array of labels based on the following rules:

If the issue doesn't have any labels, add:
* `"bug"` and `"needs triage"` if the title contains `"error"` or `"bug"`
* `"enhancement"` and `"discussing"` if the title contains `"feature"` or `"add"`

Otherwise, if the given labels contain:
* `"needs triage"` and the title contains `"simple"` or `"easy"`, remove `"needs triage"` and add `"good first issue"`
* `"discussing"` and the title contains `"planned"` or `"next"`, remove `"discussing"` and add `"on the roadmap"`
* Otherwise, if `"needs triage"` or `"discussing"` is present, remove it and add `"help wanted"`

If the title contains:
* `"security"`, add a `"critical"` label

### Tests:

1. `triageIssue("app crashes with error", [])` should return `["bug", "needs triage"]`.
2. `triageIssue("app crashes with error", ["bug", "needs triage"])` should return `["bug", "help wanted"]`.
3. `triageIssue("add dark mode", [])` should return `["enhancement", "discussing"]`.
4. `triageIssue("add dark mode", ["enhancement", "discussing"])` should return `["enhancement", "help wanted"]`.
5. `triageIssue("xss security bug", [])` should return `["bug", "needs triage", "critical"]`.
6. `triageIssue("security vulnerability in auth", [])` should return `["critical"]`.
7. `triageIssue("easy a11y fix", ["bug", "needs triage"])` should return `["bug", "good first issue"]`.
8. `triageIssue("planned api migration", ["enhancement", "discussing"])` should return `["enhancement", "on the roadmap"]`.
9. `triageIssue("improve security", ["enhancement", "discussing"])` should return `["enhancement", "help wanted", "critical"]`.