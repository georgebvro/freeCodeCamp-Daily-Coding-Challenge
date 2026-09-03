function moonPhase(dateString) {
  const referenceNewMoon = "2000-01-06";
  const differenceInMilliseconds = new Date(dateString) - new Date(referenceNewMoon);
  const differenceInDays = differenceInMilliseconds / 1000 / 60 / 60 / 24;
  const dayOfTheCycle = differenceInDays % 28 + 1;

  if (dayOfTheCycle <= 7) 
    return "New";
  
  else if (dayOfTheCycle <= 14) 
    return "Waxing";
  
  else if (dayOfTheCycle <= 21) 
    return "Full";
  
  else if (dayOfTheCycle <= 28) 
    return "Waning";
}

console.log(moonPhase("2000-01-12"));
console.log(moonPhase("2000-01-13"));
console.log(moonPhase("2014-10-15"));
console.log(moonPhase("2012-10-21"));
console.log(moonPhase("2022-12-14"));

// --- TEST SUITE ---

const testsText = `
1. moonPhase("2000-01-12") should return "New".
2. moonPhase("2000-01-13") should return "Waxing".
3. moonPhase("2014-10-15") should return "Full".
4. moonPhase("2012-10-21") should return "Waning".
5. moonPhase("2022-12-14") should return "New".
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