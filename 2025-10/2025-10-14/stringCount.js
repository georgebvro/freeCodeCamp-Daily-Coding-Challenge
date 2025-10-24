function count(text, pattern) {

  return [...text.matchAll(new RegExp(`(?=(${pattern}))`, "g"))].length;
}

console.log(count('abcdefg', 'def'));
console.log(count('hello', 'world'));
console.log(count('mississippi', 'iss'));
console.log(count('she sells seashells by the seashore', 'sh'));
console.log(count('101010101010101010101', '101'));

console.log(count("aaa", "aa"));