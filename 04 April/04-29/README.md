# freeCodeCamp Daily Coding Challenge - April 29

## URL Query Parser

Given a URL that contains a query string, parse the query string into an object (or dictionary) of key-value pairs.

* The query string begins after the `"?"`,
* each parameter is separated by `"&"`,
* each key/value pair is separated by `"="`

For example, given `"https://example.com/search?name=Alice&age=30"`, return:
```
{
  "name": "Alice",
  "age": "30"
}
```

All values should be returned as strings.

### Tests:

1. `parseUrlQuery("https://example.com/search?name=Alice&age=30")` should return `{"name": "Alice", "age": "30"}`
2. `parseUrlQuery("https://freecodecamp.org/learn?skill=programming&language=python")` should return `{"skill": "programming", "language": "python"}`
3. `parseUrlQuery("https://freecodecamp.org/items?category=books&sort=asc&page=2")` should return `{"category": "books", "sort": "asc", "page": "2"}`
4. `parseUrlQuery("https://example.com?redirect=freecodecamp.org/learn&when=now")` should return `{"redirect": "freecodecamp.org/learn", "when": "now"}`