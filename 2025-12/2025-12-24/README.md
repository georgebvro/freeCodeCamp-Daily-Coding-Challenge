# freeCodeCamp Daily Coding Challenge - December 24, 2025

## Markdown Image Parser

Given a string of an image in Markdown, return the equivalent HTML string.

A Markdown image has the following format: `"![alt text](image_url)"`. Where:

* `alt text` is the description of the image (the `alt` attribute value).
* `image_url` is the source URL of the image (the `src` attribute value).

Return a string of the HTML `img` tag with the `src` set to the image URL and the `alt` set to the alt text.

For example, given `"![Cute cat](cat.png)"` return `'<img src="cat.png" alt="Cute cat">'`;

* Make sure the tag, order of attributes, spacing, and quote usage is the same as above.

Note: The console may not display HTML tags in strings when logging messages — check the browser console to see logs with tags included.

### Tests

1. `parseImage("![Cute cat](cat.png)")` should return `'<img src="cat.png" alt="Cute cat">'`.
2. `parseImage("![Rocket Ship](https://freecodecamp.org/cdn/rocket-ship.jpg)")` should return `'<img src="https://freecodecamp.org/cdn/rocket-ship.jpg" alt="Rocket Ship">'`.
3. `parseImage("![Cute cats!](https://freecodecamp.org/cats.jpeg)")` should return `'<img src="https://freecodecamp.org/cats.jpeg" alt="Cute cats!">'`.