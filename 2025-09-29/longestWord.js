function getLongestWord(sentence) {
  const words = sentence
    .replace(".", "")
    .split(" ")

  let longestWord = "";

  words.forEach(word => {
    if (word.length > longestWord.length)
      longestWord = word;
  })

  return longestWord;
}

console.log(getLongestWord("coding is fun"));
console.log(getLongestWord("Coding challenges are fun and educational."));
console.log(getLongestWord("This sentence has multiple long words."));