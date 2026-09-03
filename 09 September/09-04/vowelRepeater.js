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

// --- TEST SUITE ---

const testsText = `
1. repeatVowels("hello world") should return "helloo wooorld".
2. repeatVowels("freeCodeCamp") should return "freeeCooodeeeeCaaaaamp".
3. repeatVowels("AEIOU") should return "AEeIiiOoooUuuuu".
4. repeatVowels("I like eating ice cream in Iceland") should return "I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand".
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("--------------------------");
  console.log("🧪Starting Verification...");
  console.log("--------------------------");

  let allPassed = true;
  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(test.output);
    let comparison;

    if (Array.isArray(testOutput))
      comparison = arraysEqual(functionCallOutput, testOutput);
    else
      comparison = functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    }
    else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      allPassed = false;
      failCount ++;
    }
  })

  console.log("----------------------------");

  if (allPassed)
    console.log("🎉SUCCESS: All tests PASSED.");
  else
    console.log(`⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`);
}

function arraysEqual(a, b) {
  if (a.length !== b.length)
    return false;

  for (const index in a) {
    if (Array.isArray(a[index])) {
      if (Array.isArray(b[index])) {
        if (!arraysEqual(a[index], b[index]))
          return false;
      }
      else 
        return false;
    }

    else if (a[index] !== b[index])
      return false;
  }

  return true;
}

runTests(testData);