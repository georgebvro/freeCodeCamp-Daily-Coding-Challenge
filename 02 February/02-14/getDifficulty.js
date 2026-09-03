function getDifficulty(track) {
  const leftToRightDirectionChanges = track.match(/(LR)/g)?.length ?? 0;
  const rightToLeftDirectionChanges = track.match(/(RL)/g)?.length ?? 0;
  const leftTurns = track.match(/(L([^R]|$))/g)?.length ?? 0;
  const rightTurns = track.match(/(R([^L]|$))/g)?.length ?? 0;

  const directionChangePoints = 15;
  const turnPoints = 5;

  const trackScore = (leftToRightDirectionChanges + rightToLeftDirectionChanges ) * directionChangePoints 
	+ (leftTurns + rightTurns) * turnPoints;

  return trackScore <= 100 ? "Easy" : trackScore <= 200 ? "Medium" : "Hard";
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getDifficulty("SLSLLSRRLSRLRL") should return "Easy".
2. getDifficulty("LLRSLRLRSLLRLRSLRRLRSRLLS") should return "Hard".
3. getDifficulty("SRRRRLSLLRLRSSRLSRL") should return "Medium".
4. getDifficulty("LSRLRLSRLRLSLRSLRLLRLSRLRLRSL") should return "Hard".
5. getDifficulty("SLLSSLRLSLSLRSLSSLRL") should return "Medium".
6. getDifficulty("SRSLSRSLSRRSLSRSRSLSRLSRSR") should return "Easy".
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