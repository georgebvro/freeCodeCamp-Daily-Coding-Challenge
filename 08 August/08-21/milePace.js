function milePace(miles, duration) {
  const durationSplit = duration.split(":");
  
  const durationTotalSeconds = durationSplit[0] * 60 + parseInt(durationSplit[1]);
  const averageSecondsPerMile = parseInt(durationTotalSeconds / miles);
  
  let averageTimeMinutes = parseInt(averageSecondsPerMile / 60);
  let averageTimeSeconds = averageSecondsPerMile % 60;
  
  if (averageTimeMinutes < 10) averageTimeMinutes = '0' + averageTimeMinutes;
  if (averageTimeSeconds < 10) averageTimeSeconds = '0' + averageTimeSeconds;
  
  const averageTime = averageTimeMinutes + ":" + averageTimeSeconds;
  
  //console.log(durationSplit, durationTotalSeconds, averageSecondsPerMile, averageTimeMinutes, averageTimeSeconds, averageTime);
  
  return averageTime;
}

console.log(milePace(3, "24:00"));
console.log(milePace(1, "06:45"));
console.log(milePace(2, "07:00"));
console.log(milePace(26.2, "120:35"));

console.log(milePace(1, "00:00"));

// --- TEST SUITE ---

const testsText = `
1. milePace(3, "24:00") should return "08:00".
2. milePace(1, "06:45") should return "06:45".
3. milePace(2, "07:00") should return "03:30".
4. milePace(26.2, "120:35") should return "04:36".
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+)\.$/gm;
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