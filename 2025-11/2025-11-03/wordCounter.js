function countWords(sentence) {

  return sentence
    .split(" ")
    .length;
}

console.log(countWords("Hello world"));
console.log(countWords("The quick brown fox jumps over the lazy dog."));
console.log(countWords("I like coding challenges!"));
console.log(countWords("Complete the challenge in JavaScript and Python."));
console.log(countWords("The missing semi-colon crashed the entire internet."));