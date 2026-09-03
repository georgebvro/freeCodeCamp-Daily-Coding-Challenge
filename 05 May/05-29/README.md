# freeCodeCamp Daily Coding Challenge - May 29, 2026

## Wider Aspect Ratio

Given two strings for different image dimensions, return the aspect ratio of the image with a greater width-to-height ratio.

* The given strings will be in the format `"WxH"`, for example, `"1920x1080"`.
* The aspect ratio is the ratio of width to height, reduced to the lowest whole numbers. For example, `"1920x1080"` reduces to `"16:9"`.
* Return a string in format `"W:H"`, for example, `"16:9"`.

### Tests:

1. `getWiderAspectRatio("1920x1080", "800x600")` should return `"16:9"`.
2. `getWiderAspectRatio("1080x1350", "2048x1536")` should return `"4:3"`.
3. `getWiderAspectRatio("640x480", "2440x1220")` should return `"2:1"`.
4. `getWiderAspectRatio("360x640", "1080x1920")` should return `"9:16"`.
5. `getWiderAspectRatio("3440x1440", "2048x858")` should return `"43:18"`.
6. `getWiderAspectRatio("12345x61234", "12534x51234")` should return `"2089:8539"`.