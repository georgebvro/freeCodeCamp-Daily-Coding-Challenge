function reverseSentence(sentence) {
  
  return sentence
    .split(" ")
    .filter(word => word != '')
    .reverse()
    .join(" ");
}

console.log(reverseSentence("world hello"));
console.log(reverseSentence("push commit git"));
console.log(reverseSentence("npm  install  sudo"));
console.log(reverseSentence("import    default   function  export"));