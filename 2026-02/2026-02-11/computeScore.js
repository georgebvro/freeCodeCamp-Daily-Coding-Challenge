function computeScore(judgeScores, ...penalties) {

  return judgeScores
    .sort((a, b) => a - b)
    .reduce((total, score, index, source) => 0 < index && index < source.length - 1 ? total + score : total, 0)
    - penalties.reduce((total, penalty) => total + penalty, 0);
}

// --- TEST SUITE ---

const testsText = String.raw`
1. computeScore([10, 8, 9, 6, 9, 8, 8, 9, 7, 7], 1) should return 64.
2. computeScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]) should return 80.
3. computeScore([10, 8, 9, 10, 9, 8, 8, 9, 10, 7], 1, 2, 1) should return 67.
4. computeScore([8.0, 8.5, 9.0, 8.5, 9.0, 8.0, 9.0, 8.5, 9.0, 8.5], 0.5, 1.0) should return 67.5.
5. computeScore([6.0, 8.5, 7.0, 9.0, 7.5, 8.0, 6.5, 9.5, 7.0, 8.0], 1.5, 0.5, 0.5) should return 59.
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