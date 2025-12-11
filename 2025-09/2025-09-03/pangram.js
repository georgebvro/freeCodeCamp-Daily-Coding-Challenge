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

// --- TEST SUITE ---

const testsText = `
1. isPangram("hello", "helo") should return true
2. isPangram("hello", "hel") should return false
3. isPangram("hello", "helow") should return false
4. isPangram("hello world", "helowrd") should return true
5. isPangram("Hello World!", "helowrd") should return true
6. isPangram("Hello World!", "heliowrd") should return false
7. isPangram("freeCodeCamp", "frcdmp") should return false
8. isPangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz") should return true
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