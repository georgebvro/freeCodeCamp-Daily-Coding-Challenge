function jbelmu(text) {
  let textArray = text.split(" ");
  
  textArray = textArray.map(word => {
    const wordArray = 
      word.split("")
      .slice(1, word.length - 1)
      .sort();

    wordArray.unshift(word[0]);
    if (word.length > 1)
      wordArray.push(word[word.length - 1]);

    return wordArray.join("");
  })

  return textArray.join(" ");
}

console.log(jbelmu("hello world"));
console.log(jbelmu("i love jumbled text"));
console.log(jbelmu("freecodecamp is my favorite place to learn to code"));
console.log(jbelmu("the quick brown fox jumps over the lazy dog"));