function daylightHours(latitude) {
  let latitudeInMap = latitude;
  const latitudeInterval = 15;
  const latitudeHours = new Map([
    [-90, 24], [-75, 23], [-60, 21], [-45, 15], [-30, 13], [-15, 12], 
    [0, 12], [15, 11], [30, 10], [45, 9], [60, 6], [75, 2], [90, 0]
  ]);

  if (!latitudeHours.get(latitude)) {
    const quotient = Math.floor(Math.abs(latitude) / latitudeInterval);
    const remainder = Math.abs(latitude) % latitudeInterval;

    latitudeInMap = remainder < latitudeInterval / 2 
      ? latitudeInterval * quotient 
      : latitudeInterval * (quotient + 1);
    
    if (latitude < 0)
      latitudeInMap = -latitudeInMap;
  }

  return latitudeHours.get(latitudeInMap);
}

console.log(daylightHours(45));
console.log(daylightHours(0));
console.log(daylightHours(-90));
console.log(daylightHours(-10));
console.log(daylightHours(23));
console.log(daylightHours(88));
console.log(daylightHours(-33));
console.log(daylightHours(70));

// --- TEST SUITE ---

const testsText = `
1. daylightHours(45) should return 9.
2. daylightHours(0) should return 12.
3. daylightHours(-90) should return 24.
4. daylightHours(-10) should return 12.
5. daylightHours(23) should return 10.
6. daylightHours(88) should return 0.
7. daylightHours(-33) should return 13.
8. daylightHours(70) should return 2.
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