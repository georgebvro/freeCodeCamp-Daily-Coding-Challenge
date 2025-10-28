function wiseSpeak(sentence) {
  const { goesToEnd, goesToFront, punctuation } = 
    /(?<goesToEnd>.*?(have|must|are|will|can)) (?<goesToFront>.*)(?<punctuation>.)/
    .exec(sentence)
    .groups;
  
  return `${goesToFront[0].toUpperCase()}${goesToFront.slice(1)}, ${goesToEnd.toLowerCase()}${punctuation}`;
}

console.log(wiseSpeak("You must speak wisely."));
console.log(wiseSpeak("You can do it!"));
console.log(wiseSpeak("Do you think you will complete this?"));
console.log(wiseSpeak("All your base are belong to us."));
console.log(wiseSpeak("You have much to learn."));