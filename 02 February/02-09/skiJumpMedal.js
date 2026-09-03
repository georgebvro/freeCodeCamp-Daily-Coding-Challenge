function skiJumpMedal(distancePoints, stylePoints, windComp, kPointBonus) {
  const otherScores = [165.5, 172.0, 158.0, 180.0, 169.5, 175.0, 162.0, 170.0];
  otherScores.sort((a, b) => b - a);
  const myScore = distancePoints + stylePoints + windComp + kPointBonus;

  return myScore > otherScores[0] ? "Gold" 
    : myScore > otherScores[1] ? "Silver" 
    : myScore > otherScores[2] ? "Bronze" 
    : "No Medal";
}

// --- TEST SUITE ---

const testsText = String.raw`
1. skiJumpMedal(125.0, 58.0, 0.0, 6.0) should return "Gold".
2. skiJumpMedal(119.0, 50.0, 1.0, 4.0) should return "Bronze".
3. skiJumpMedal(122.0, 52.0, -1.0, 4.0) should return "Silver".
4. skiJumpMedal(118.0, 50.5, -1.5, 4.0) should return "No Medal".
5. skiJumpMedal(124.0, 50.5, 2.0, 5.0) should return "Gold".
6. skiJumpMedal(119.0, 49.5, 0.0, 3.0) should return "No Medal".
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