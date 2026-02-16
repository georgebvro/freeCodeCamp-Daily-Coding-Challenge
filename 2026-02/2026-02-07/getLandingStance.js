function getLandingStance(startStance, rotation) {
  const multiplesOf90Degrees = Math.abs(Math.floor(rotation / 90));
  const flips = Math.floor(multiplesOf90Degrees / 2);
  const changedStance = flips % 2;

  /* Using ternary operator
  return changedStance 
    ? startStance === "Regular" ? "Goofy" : "Regular" 
    : startStance;
  */

  /* Using Array.find()
  const stances = ["Regular", "Goofy"];

  return changedStance ? stances.find(stance => stance !== startStance) : startStance;
  */

  // Using Object lookup
  const toggle = {
    "Regular": "Goofy",
    "Goofy": "Regular"
  };

  return changedStance ? toggle[startStance] : startStance;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getLandingStance("Regular", 90) should return "Regular".
2. getLandingStance("Regular", 180) should return "Goofy".
3. getLandingStance("Goofy", -270) should return "Regular".
4. getLandingStance("Regular", 2340) should return "Goofy".
5. getLandingStance("Goofy", 2160) should return "Goofy".
6. getLandingStance("Goofy", -540) should return "Regular".
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