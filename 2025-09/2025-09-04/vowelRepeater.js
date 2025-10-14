function repeatVowels(str) {
  const regex = /[aeiouAEIOU]/;
  let vowelRepeaterArr = str.split("");
  let vowelCounter = 0;

  vowelRepeaterArr = vowelRepeaterArr.map(element => {
    let vowelRepeaterElement = element;
    
    if (regex.test(element)) {
      for (let i = 0; i < vowelCounter; i ++) {
        vowelRepeaterElement += element.toLowerCase();
      }
    vowelCounter ++;
    }

    return vowelRepeaterElement;
  })

  return vowelRepeaterArr.join('');
}

console.log(repeatVowels("hello world")); 
console.log(repeatVowels("freeCodeCamp"));
console.log(repeatVowels("AEIOU"));
console.log(repeatVowels("I like eating ice cream in Iceland"));