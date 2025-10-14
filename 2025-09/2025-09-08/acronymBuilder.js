function buildAcronym(str) {
  const specialWords = ["a", "for", "an", "and", "by", "of"];
  
  return str
    .split(" ")
    .map((word, index) => 
      !specialWords.includes(word.toLowerCase()) || (specialWords.includes(word.toLowerCase()) && index === 0)
        ? word[0].toUpperCase() 
        : undefined)
    .join("");
}

console.log(buildAcronym("Search Engine Optimization"));
console.log(buildAcronym("Frequently Asked Questions"));
console.log(buildAcronym("National Aeronautics and Space Administration"));
console.log(buildAcronym("Federal Bureau of Investigation"));
console.log(buildAcronym("For your information"));
console.log(buildAcronym("By the way"));
console.log(buildAcronym("An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily"));

console.log(buildAcronym("For An Open Door"));
console.log(buildAcronym("for An Open Door"));