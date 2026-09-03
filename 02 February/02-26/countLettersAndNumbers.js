function countLettersAndNumbers(str) {
  const letters = str.match(/[a-z]/gi)?.length ?? 0;
  const numbers = str.match(/\d/g)?.length ?? 0;

  return `The string has ${letters} letter${letters === 1 ? "" : "s"} and ${numbers} number${numbers === 1 ? "" : "s"}.`;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. countLettersAndNumbers("helloworld123") should return "The string has 10 letters and 3 numbers.".
2. countLettersAndNumbers("Catch 22") should return "The string has 5 letters and 2 numbers.".
3. countLettersAndNumbers("A1!") should return "The string has 1 letter and 1 number.".
4. countLettersAndNumbers("12345") should return "The string has 0 letters and 5 numbers.".
5. countLettersAndNumbers("password") should return "The string has 8 letters and 0 numbers.".
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("--------------------------");
  console.log("🧪Starting Verification...");
  console.log("--------------------------");

  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(test.output);

    const comparison = Array.isArray(testOutput)
      ? arraysEqual(functionCallOutput, testOutput)
      : functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    }
    else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      ++failCount;
    }
  })

  console.log("----------------------------",
    failCount
    ? `\n⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`
    : "\n🎉SUCCESS: All tests PASSED."
  );
}

function arraysEqual(a, b) {
  if (a.length !== b.length)
    return false;

  for (let i = 0; i < a.length; ++i) {
    if (Array.isArray(a[i])) {
      if (Array.isArray(b[i])) {
        if (!arraysEqual(a[i], b[i]))
          return false;
      }
      else 
        return false;
    }

    else if (a[i] !== b[i])
      return false;
  }

  return true;
}

runTests(testData);