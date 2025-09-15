# Notepad++ regular expression for replace functionality that prettifies tests in README.md

**Find what:**
```regex
(?<testNumber>\d+\. )(?<function>\w+\([^)]*\))(?<shouldReturn> should return )(?<returnedValue>[^\.]+)(?<period>\.*)$
```

**Replace with:**
```regex
$+{testNumber}`$+{function}`$+{shouldReturn}`$+{returnedValue}`$+{period}
```

```re
(?<testNumber>\d+\. )(?<function>\w+\([^)]*\))(?<shouldReturn> should return )(?<returnedValue>[^\.]+)(?<period>\.*)$
```

```perl
(?<testNumber>\d+\. )(?<function>\w+\([^)]*\))(?<shouldReturn> should return )(?<returnedValue>[^\.]+)(?<period>\.*)$
```

```javascript
(?<testNumber>\d+\. )(?<function>\w+\([^)]*\))(?<shouldReturn> should return )(?<returnedValue>[^\.]+)(?<period>\.*)$
```

```js
(?<testNumber>\d+\. )(?<function>\w+\([^)]*\))(?<shouldReturn> should return )(?<returnedValue>[^\.]+)(?<period>\.*)$
```
