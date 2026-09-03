function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {

  if (!["B", "KB", "MB", "GB"].includes(videoUnit))
    return "Invalid video unit";
  
  if (!/GB|TB/.test(driveUnit))
    return "Invalid drive unit";

  return Math.floor(
    ( driveUnit == "TB" ? driveSize * 1000000000000
    : driveSize * 1000000000 )
    /
    ( videoUnit == "GB" ? videoSize * 1000000000
    : videoUnit == "MB" ? videoSize * 1000000
    : videoUnit == "KB" ? videoSize * 1000
    : videoSize )
  );
}

console.log(numberOfVideos(500, "MB", 100, "GB"));
console.log(numberOfVideos(1, "TB", 10, "TB"));
console.log(numberOfVideos(2000, "MB", 100000, "MB"));
console.log(numberOfVideos(500000, "KB", 2, "TB"));
console.log(numberOfVideos(1.5, "GB", 2.2, "TB"));

// --- TEST SUITE ---

const testsText = `
1. numberOfVideos(500, "MB", 100, "GB") should return 200.
2. numberOfVideos(1, "TB", 10, "TB") should return "Invalid video unit".
3. numberOfVideos(2000, "MB", 100000, "MB") should return "Invalid drive unit".
4. numberOfVideos(500000, "KB", 2, "TB") should return 4000.
5. numberOfVideos(1.5, "GB", 2.2, "TB") should return 1466.
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