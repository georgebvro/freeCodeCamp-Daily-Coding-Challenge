# freeCodeCamp Daily Coding Challenge - March 21, 2026

## QR Decoder

Given a 6x6 matrix (array of strings), representing a QR code, return the string of binary data in the code.

* The QR code may be given in any rotation of 90 degree increments.
* A correctly oriented code has a 2x2 group of `1`'s (orientation markers) in the bottom-left, top-left, and top-right corners.
* The three 2x2 orientation markers are not part of the binary data.
* The binary data is read left-to-right, top-to-bottom (like a book) when the QR code is correctly oriented.
* A code will always have exactly one valid orientation.

For example, given:
```
[
  "110011",
  "110011",
  "000000",
  "000000",
  "110000",
  "110001"
]
```
or given the same code with a different orientation:
```
[
  "110011",
  "110011",
  "000000",
  "000000",
  "000011",
  "100011"
]
```
Return `"000000000000000000000001"`, all the binary data excluding the three 2x2 orientation markers.

### Tests:

1. `decodeQr(["110011", "110011", "000000", "000000", "110000", "110001"])` should return `"000000000000000000000001"`.
2. `decodeQr(["100011", "000011", "000000", "000000", "110011", "110011"])` should return `"000000000000000000000001"`.
3. `decodeQr(["110011", "111111", "010000", "110000", "110011", "110100"])` should return `"001101000011000000110100"`.
4. `decodeQr(["011011", "101011", "101000", "100010", "110011", "111011"])` should return `"010001000100010101010110"`.
5. `decodeQr(["111100", "110001", "100011", "001101", "110011", "110011"])` should return `"010000100100100101001110"`.