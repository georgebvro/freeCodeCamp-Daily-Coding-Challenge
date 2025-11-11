# freeCodeCamp Daily Coding Challenge - November 10, 2025

## Extension Extractor

Given a string representing a filename, return the extension of the file.

* The extension is the part of the filename that comes after the last period (`.`).
* If the filename does not contain a period or ends with a period, return `"none"`.
* The extension should be returned as-is, preserving case.

### Tests

1. `getExtension("document.txt")` should return `"txt"`.
2. `getExtension("README")` should return `"none"`.
3. `getExtension("image.PNG")` should return `"PNG"`.
4. `getExtension(".gitignore")` should return `"gitignore"`.
5. `getExtension("archive.tar.gz")` should return `"gz"`.
6. `getExtension("final.draft.")` should return `"none"`.