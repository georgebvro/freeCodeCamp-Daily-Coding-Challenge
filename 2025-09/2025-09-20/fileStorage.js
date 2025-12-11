function numberOfFiles(fileSize, fileUnit, driveSizeGb) {
  
  return Math.floor(driveSizeGb / (
    fileUnit === "MB" ? fileSize / 1000
    : fileUnit === "KB" ? fileSize / 1000000
    : fileSize / 1000000000));
}

console.log(numberOfFiles(500, "KB", 1));
console.log(numberOfFiles(50000, "B", 1));
console.log(numberOfFiles(5, "MB", 1));
console.log(numberOfFiles(4096, "B", 1.5));
console.log(numberOfFiles(220.5, "KB", 100));
console.log(numberOfFiles(4.5, "MB", 750));

// --- TEST SUITE ---

const testsText = `
1. numberOfFiles(500, "KB", 1) should return 2000.
2. numberOfFiles(50000, "B", 1) should return 20000.
3. numberOfFiles(5, "MB", 1) should return 200.
4. numberOfFiles(4096, "B", 1.5) should return 366210.
5. numberOfFiles(220.5, "KB", 100) should return 453514.
6. numberOfFiles(4.5, "MB", 750) should return 166666.
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