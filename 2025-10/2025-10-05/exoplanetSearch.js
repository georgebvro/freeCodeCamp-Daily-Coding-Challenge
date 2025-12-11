function hasExoplanet(readings) {
  const codeOfUppercaseA = 'A'.charCodeAt(0);
  const luminosityThreshold = 10; //luminosity level beyond which letters are used to represent values

  const luminosityLevels = 
    readings
    .split("")
    .map(reading => /[A-Z]/.exec(reading) ? reading.charCodeAt(0) - codeOfUppercaseA + luminosityThreshold : parseInt(reading))

  const averageLuminosityLevel = 
    luminosityLevels
    .reduce((sum, luminosityLevel) => sum + luminosityLevel)
    / luminosityLevels.length

  return luminosityLevels
    .some(luminosityLevel => luminosityLevel <= averageLuminosityLevel * 80 / 100);
}

console.log(hasExoplanet("665544554"));
console.log(hasExoplanet("FGFFCFFGG"));
console.log(hasExoplanet("MONOPLONOMONPLNOMPNOMP"));
console.log(hasExoplanet("FREECODECAMP"));
console.log(hasExoplanet("9AB98AB9BC98A"));
console.log(hasExoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE"));

// --- TEST SUITE ---

const testsText = `
1. hasExoplanet("665544554") should return false.
2. hasExoplanet("FGFFCFFGG") should return true.
3. hasExoplanet("MONOPLONOMONPLNOMPNOMP") should return false.
4. hasExoplanet("FREECODECAMP") should return true.
5. hasExoplanet("9AB98AB9BC98A") should return false.
6. hasExoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE") should return true.
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("--------------------------");
  console.log("🧪Starting Verification...");
  console.log("--------------------------");

  let allPassed = true;
  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(test.output);
    let comparison;

    if (Array.isArray(testOutput))
      comparison = arraysEqual(functionCallOutput, testOutput);
    else
      comparison = functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    }
    else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      allPassed = false;
      failCount ++;
    }
  })

  console.log("----------------------------");

  if (allPassed)
    console.log("🎉SUCCESS: All tests PASSED.");
  else
    console.log(`⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`);
}

function arraysEqual(a, b) {
  if (a.length !== b.length)
    return false;

  for (const index in a) {
    if (Array.isArray(a[index])) {
      if (Array.isArray(b[index])) {
        if (!arraysEqual(a[index], b[index]))
          return false;
      }
      else 
        return false;
    }

    else if (a[index] !== b[index])
      return false;
  }

  return true;
}

runTests(testData);