function formatDate(dateString) {

  return new Date(dateString).toLocaleDateString("en-CA");
}

console.log(formatDate("December 6, 2025"));
console.log(formatDate("January 1, 2000"));
console.log(formatDate("November 11, 1111"));
console.log(formatDate("September 7, 512"));
console.log(formatDate("May 4, 1950"));
console.log(formatDate("February 29, 1992"));

// --- TEST SUITE ---

const testsText = `
1. formatDate("December 6, 2025") should return "2025-12-06".
2. formatDate("January 1, 2000") should return "2000-01-01".
3. formatDate("November 11, 1111") should return "1111-11-11".
4. formatDate("September 7, 512") should return "512-09-07".
5. formatDate("May 4, 1950") should return "1950-05-04".
6. formatDate("February 29, 1992") should return "1992-02-29".
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