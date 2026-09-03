function largestDifference(skater1, skater2) {
  const differences = Array.from({ length: skater1.length }, (_, i) => Math.abs(skater1[i] - skater2[i]));

  const maxDifference = differences.reduce((a, b) => Math.max(a, b));

  return differences.findIndex(difference => difference === maxDifference) + 1;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. largestDifference([26.11, 25.80, 25.92, 26.23, 26.07], [25.93, 25.74, 26.53, 26.11, 26.30]) should return 3.
2. largestDifference([27.04, 25.94, 26.22, 26.07, 26.18], [25.59, 25.80, 26.11, 26.01, 26.23]) should return 1.
3. largestDifference([25.82, 25.90, 26.05, 26.00, 26.48], [25.85, 25.92, 26.07, 25.98, 25.95]) should return 5.
4. largestDifference([25.88, 26.10, 25.95, 26.05, 26.00], [25.90, 26.55, 25.92, 26.03, 26.01]) should return 2.
5. largestDifference([25.92, 26.01, 26.05, 25.88, 26.12], [25.95, 26.00, 26.03, 26.45, 26.10]) should return 4.
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