function calculatePenaltyDistance(rounds) {
  const targetsPerRound = 5;
  const penalty = 150;

  return rounds.reduce(
    (totalTargetsMissed, targetsHit) => totalTargetsMissed + targetsPerRound - targetsHit, 0
  ) * penalty;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. calculatePenaltyDistance([4, 4]) should return 300.
2. calculatePenaltyDistance([5, 5]) should return 0.
3. calculatePenaltyDistance([4, 5, 3, 5]) should return 450.
4. calculatePenaltyDistance([5, 4, 5, 5]) should return 150.
5. calculatePenaltyDistance([4, 3, 0, 3]) should return 1500.
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