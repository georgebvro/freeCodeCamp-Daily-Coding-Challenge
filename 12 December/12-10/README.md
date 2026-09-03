# freeCodeCamp Daily Coding Challenge - December 10, 2025

## Markdown Bold Parser

Given a string that may include some bold text in Markdown, return the equivalent HTML string.

* Bold text in Markdown is any text that starts and ends with two asterisks (`**`) or two underscores (`__`).
* There cannot be any spaces between the text and the asterisks or underscores, but there can be spaces in the text itself.
* Convert all bold occurrences to HTML `b` tags and return the string.

For example, given `"**This is bold**"`, return `"<b>This is bold</b>"`.

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

### Tests

1. `parseBold("**This is bold**")` should return `"<b>This is bold</b>"`.
2. `parseBold("__This is also bold__")` should return `"<b>This is also bold</b>"`.
3. `parseBold("**This is not bold **")` should return `"**This is not bold **"`.
4. `parseBold("__ This is also not bold__")` should return `"__ This is also not bold__"`.
5. `parseBold("The **quick** brown fox __jumps__ over the **lazy** dog.")` should return `"The <b>quick</b> brown fox <b>jumps</b> over the <b>lazy</b> dog."`.