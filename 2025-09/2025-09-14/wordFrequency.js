function getWords(paragraph) {
  
  return paragraph
    .split(/[ ,\.!]/)
    .filter(word => word !== "")
    .map(word => word.toLowerCase())
    .reduce((arr, word) => {
      const index = arr.findIndex(wordObject => wordObject.name === word);
    
      if (index === -1)
        arr.push({ name: word, count: 1 });
      else
        arr[index].count ++;

      return arr;
    }, [])
    .sort((a, b) => b.count - a.count)
    .slice(0, 3)
    .map(wordObject => wordObject.name);
}

console.log(getWords("Coding in Python is fun because coding Python allows for coding in Python easily while coding"));
console.log(getWords("I like coding. I like testing. I love debugging!"));
console.log(getWords("Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!"));

console.log(getWords("A b b c c c"));