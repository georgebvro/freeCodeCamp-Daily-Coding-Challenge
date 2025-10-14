function isPangram(sentence, letters) {
  sentence = sentence.replace(/[^a-zA-Z]/g, "").toLowerCase();

  return isItPangram(sentence, letters) && isItPangram(letters, sentence);
}

function isItPangram(string1, string2) {
  for (let i = 0; i < string2.length; i ++) {
    if (string1.indexOf(string2[i]) === -1)
      return false;
  }
  return true;
}

console.log(isPangram("hello", "helo"));
console.log(isPangram("hello", "hel"));
console.log(isPangram("hello", "helow"));
console.log(isPangram("hello world", "helowrd"));
console.log(isPangram("Hello World!", "helowrd"));
console.log(isPangram("Hello World!", "heliowrd"));
console.log(isPangram("freeCodeCamp", "frcdmp"));
console.log(isPangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz"));