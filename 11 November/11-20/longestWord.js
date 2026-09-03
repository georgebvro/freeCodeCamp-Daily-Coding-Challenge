function longestWord(sentence) {

  return sentence
    .replace(/[^a-zA-Z ]/g, "")
    .split(" ")
    .sort((a, b) => b.length - a.length)
    [0];
}

// --- TEST SUITE ---

const testsText = `
1. longestWord("The quick red fox") should return "quick".
2. longestWord("Hello coding challenge.") should return "challenge".
3. longestWord("Do Try This At Home.") should return "This".
4. longestWord("This sentence... has commas, ellipses, and an exclamation point!") should return "exclamation".
5. longestWord("A tie? No way!") should return "tie".
6. longestWord("Wouldn't you like to know.") should return "Wouldnt".
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+)\.$/gm;
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

    if (functionCallOutput === testOutput) {
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

runTests(testData);