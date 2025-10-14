function capitalize(paragraph) {
  paragraph = paragraph[0].toUpperCase() + paragraph.substring(1);

  for (let i = 1; i < paragraph.length; i ++) {
    if (/[.?!]/.test(paragraph[i])) {
      for (let j = i + 1; j < paragraph.length; j ++) {
        if (/[a-zA-Z]/.test(paragraph[j])) {
          paragraph = paragraph.substring(0, j) + paragraph[j].toUpperCase() + paragraph.substring(j + 1);
          break;
        }
      }
    }
  }

  return paragraph;
}

console.log(capitalize("this is a simple sentence."));
console.log(capitalize("hello world. how are you?"));
console.log(capitalize("i did today's coding challenge... it was fun!!"));
console.log(capitalize("crazy!!!strange???unconventional...sentences."));
console.log(capitalize("there's a space before this period . why is there a space before that period ?"));

console.log(capitalize("a."));
console.log(capitalize("b"));