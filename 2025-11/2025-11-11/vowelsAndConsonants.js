function count(str) {

  return [
    str.match(/[aeiou]/gi)?.length ?? 0, 
    str.match(/[b-df-hj-np-tv-z]/gi)?.length ?? 0
  ];
}

console.log(count("Hello World"));
console.log(count("JavaScript"));
console.log(count("Python"));
console.log(count("freeCodeCamp"));
console.log(count("Hello, World!"));
console.log(count("The quick brown fox jumps over the lazy dog."));

console.log(count("xyz"));
console.log(count("oua"));
console.log(count("!@#"));