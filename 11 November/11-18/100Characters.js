function oneHundred(chars) {
/* Solution 1 (while())
  let characters = chars;

  while (characters.length < 100)
    characters += chars;

  return characters.slice(0, 100);
*/

/* Solution 2 (recursion)
  if (chars.length >= 100)
    return chars.slice(0, 100);

  return oneHundred(chars + chars);
*/

/* Solution 3 (.repeat())
  return chars.repeat(Math.ceil(100 / chars.length)).slice(0, 100);
*/

// Solution 4 (.padEnd())
  return chars.padEnd(100, chars);
}

console.log(oneHundred("One hundred "));
console.log(oneHundred("freeCodeCamp "));
console.log(oneHundred("daily challenges "));
console.log(oneHundred("!"));

// --- TEST SUITE ---

const testsText = `
1. oneHundred("One hundred ") should return "One hundred One hundred One hundred One hundred One hundred One hundred One hundred One hundred One ".
2. oneHundred("freeCodeCamp ") should return "freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC".
3. oneHundred("daily challenges ") should return "daily challenges daily challenges daily challenges daily challenges daily challenges daily challenge".
4. oneHundred("!") should return "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!".
`;

const regex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+)\.$/gm;
const testData = [...testsText.matchAll(regex).map(match => match.groups)];

function runTests(testData) {
  console.log("---------------------------");
  console.log("🧪 Starting Verification...");
  console.log("---------------------------");

  let allPassed = true;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(test.output);

    if (functionCallOutput === testOutput) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    }
    else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      allPassed = false;
    }
  })

  console.log("----------------------------");

  if (allPassed)
    console.log("🎉 SUCCESS: All tests PASSED.");
  else
    console.log("⚠️ WARNING: Some tests FAILED.");
}

runTests(testData);