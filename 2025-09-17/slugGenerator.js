function generateSlug(str) {

  return str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/ +/g, " ")
    .replace(/ /g, "%20");
}

console.log(generateSlug("helloWorld"));
console.log(generateSlug("hello world!"));
console.log(generateSlug(" hello-world "));
console.log(generateSlug("hello  world"));
console.log(generateSlug("  ?H^3-1*1]0! W[0%R#1]D  "));

console.log(generateSlug(" one two  three   4   5  "));