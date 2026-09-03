function getHillRating(drop, distance, type) {
  const downhillMultiplier = 1.2;
  const slalomMultiplier = 0.9;
  const giantSlalomMultiplier = 1.0;

  const steepness = drop / distance;
  let adjustedSteepness;

  switch (type) {
    case "Downhill":
      adjustedSteepness = steepness * downhillMultiplier;
      break;
    case "Slalom":
      adjustedSteepness = steepness * slalomMultiplier;
      break;
    case "Giant Slalom":
      adjustedSteepness = steepness * giantSlalomMultiplier;
  }

  return adjustedSteepness <= 0.1 ? "Green" 
    : adjustedSteepness <= 0.25 ? "Blue" 
    : "Black";
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getHillRating(95, 900, "Slalom") should return "Green".
2. getHillRating(620, 2800, "Downhill") should return "Black".
3. getHillRating(420, 1680, "Giant Slalom") should return "Blue".
4. getHillRating(250, 3000, "Downhill") should return "Green".
5. getHillRating(110, 900, "Slalom") should return "Blue".
6. getHillRating(380, 1500, "Giant Slalom") should return "Black".
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