# freeCodeCamp Daily Coding Challenge - January 21, 2026

## Markdown Inline Code Parser

Given a string of Markdown that includes one or more inline code blocks, return the equivalent HTML string.

Inline code blocks in Markdown use a single backtick (`` ` ``) at the start and end of the code block text.

Return the given string with all code blocks converted to HTML `code` tags.

For example, given the string ``"Use `let` to declare the variable."``, return `"Use <code>let</code> to declare the variable."`.

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

### Tests

1. ``parseInlineCode("Use `let` to declare the variable.")`` should return `"Use <code>let</code> to declare the variable."`.
2. ``parseInlineCode("Use `let` or `const` to declare a variable.")`` should return `"Use <code>let</code> or <code>const</code> to declare a variable."`.
3. ``parseInlineCode("Run `npm install` then `npm start`.")`` should return `"Run <code>npm install</code> then <code>npm start</code>."`.