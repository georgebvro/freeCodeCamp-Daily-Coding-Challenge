function countPermutations(str) {
  // P = n! / (n1! * n2! * ... * nk!)
  const letterSet = new Set(str);
  const numerator = factorial(str.length);
  let denominator = 1;
  
  for (const letter of letterSet) {
    const letterCount = str.match(new RegExp(letter, "g")).length;
    denominator *= factorial(letterCount);
  }

  return numerator / denominator;
}

const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);

// --- TEST SUITE ---

const testsText = `
1. countPermutations("abb") should return 3.
2. countPermutations("abc") should return 6.
3. countPermutations("racecar") should return 630.
4. countPermutations("freecodecamp") should return 39916800.
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

  for (const index in a)
    if (a[index] !== b[index])
      return false;
  
  return true;
}

runTests(testData);