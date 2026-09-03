function getWeekday(dateString) {

  return new Date(dateString).toLocaleString("en", { weekday: "long" });
}

console.log(getWeekday("2025-11-06"));
console.log(getWeekday("1999-12-31"));
console.log(getWeekday("1111-11-11"));
console.log(getWeekday("2112-12-21"));
console.log(getWeekday("2345-10-01"));

console.log(getWeekday("2345-02-04"));

// --- TEST SUITE ---

const testsText = `
1. getWeekday("2025-11-06") should return Thursday.
2. getWeekday("1999-12-31") should return Friday.
3. getWeekday("1111-11-11") should return Saturday.
4. getWeekday("2112-12-21") should return Wednesday.
5. getWeekday("2345-10-01") should return Monday.
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