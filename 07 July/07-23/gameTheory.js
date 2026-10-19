function playGame(p1, p2) {
  const BOTH_COOPERATE = 3;
  const BOTH_DEFECT = 1;
  const ONE_DEFECTS = 5;

  let p1Score = 0,
      p2Score = 0;

  for (const round in p1) {
    if (p1[round] === p2[round]) {
      if (p1[round] === "C") {
        p1Score += BOTH_COOPERATE;
        p2Score += BOTH_COOPERATE;
      } else {
        p1Score += BOTH_DEFECT;
        p2Score += BOTH_DEFECT;
      }
    } else {
      if (p1[round] === "D") {
        p1Score += ONE_DEFECTS;
      } else {
        p2Score += ONE_DEFECTS;
      }
    }
  }

  return [p1Score, p2Score];
}

// --- TEST SUITE ---

const testsText = String.raw`
1. playGame("CCCC", "CCCC") should return [12, 12].
2. playGame("DDDD", "DDDD") should return [4, 4].
3. playGame("CCDD", "CDDD") should return [5, 10].
4. playGame("CCCDCDCCCDDC", "CCDDCDCDDCCD") should return [24, 34].
5. playGame("DDCCDDDDCDDCDDDCDD", "CCDCCCDCCCDCCCCDCC") should return [66, 21].
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("——————————————————————————",
            "\n🧪Starting Verification...",
            "\n——————————————————————————");

  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(`(${test.output})`);

    if (JSON.stringify(functionCallOutput) === JSON.stringify(testOutput)) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    } else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${JSON.stringify(testOutput)}\nGot: ${JSON.stringify(functionCallOutput)}`);

      ++failCount;
    }
    console.log("————————————————————————————");
  })

  console.log(failCount
    ? `⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`
    : "🎉SUCCESS: All tests PASSED."
  );
}

runTests(testData);