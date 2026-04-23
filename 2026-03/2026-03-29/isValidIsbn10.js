function isValidIsbn10(str) {
  const hyphensRemoved = str.replaceAll("-", "");

  if (!/^\d{9}(\d|X)$/.test(hyphensRemoved))
    return false;

  return !Boolean(hyphensRemoved
    .split("")
    .reduce((total, digit, index) => total + (digit === "X" ? 10 : digit) * (index + 1), 0)
    % 11);
}

// --- TEST SUITE ---

const testsText = String.raw`
1. isValidIsbn10("0-306-40615-2") should return true.
2. isValidIsbn10("0-306-40615-1") should return false.
3. isValidIsbn10("0-8044-2957-X") should return true.
4. isValidIsbn10("X-306-40615-2") should return false.
5. isValidIsbn10("0-6822-2589-4") should return true.
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