function calculateAge(birthday) {
  const birthDate = new Date(birthday);
  const checkDate = new Date("November 27, 2025");
  let age = checkDate.getFullYear() - birthDate.getFullYear();

  if (
    birthDate.getMonth() > checkDate.getMonth()
    || birthDate.getMonth() == checkDate.getMonth() && birthDate.getDate() > checkDate.getDate()
  )
    --age;

  return age;
}

// --- TEST SUITE ---

const testsText = `
1. calculateAge("2000-11-20") should return 25.
2. calculateAge("2000-12-01") should return 24.
3. calculateAge("2014-10-25") should return 11.
4. calculateAge("1994-01-06") should return 31.
5. calculateAge("1994-12-14") should return 30.
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

  for (const index in a)
    if (a[index] !== b[index])
      return false;
  
  return true;
}

runTests(testData);