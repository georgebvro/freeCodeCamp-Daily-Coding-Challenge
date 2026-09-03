function calculateStartDelays(jumpScores) {
  const bestScore = jumpScores.reduce((a, b) => Math.max(a, b));

  return jumpScores.map(score => Math.ceil((bestScore - score) * 1.5));
}

// --- TEST SUITE ---

const testsText = String.raw`
1. calculateStartDelays([120, 110, 125]) should return [8, 23, 0].
2. calculateStartDelays([118, 125, 122, 120]) should return [11, 0, 5, 8].
3. calculateStartDelays([100, 105, 95, 110, 120, 115, 108]) should return [30, 23, 38, 15, 0, 8, 18].
4. calculateStartDelays([130, 125, 128, 120, 118, 122, 127, 115, 132, 124]) should return [3, 11, 6, 18, 21, 15, 8, 26, 0, 12].
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