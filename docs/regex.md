# Notepad++ regular expression for replace functionality that prettifies tests in README.md

**Find what:**
```regex
(?<testNumber>\d+\. )(?<function>\w+\([^)]*\))(?<shouldReturn> should return )(?<returnedValue>[^\.]+)(?<period>\.*)$
```

**Replace with:**
```regex
$+{testNumber}`$+{function}`$+{shouldReturn}`$+{returnedValue}`$+{period}
```