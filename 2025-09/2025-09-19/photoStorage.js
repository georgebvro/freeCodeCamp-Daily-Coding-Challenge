function numberOfPhotos(photoSizeMb, hardDriveSizeGb) {

  return Math.floor(hardDriveSizeGb * 1000 / photoSizeMb);
}

console.log(numberOfPhotos(1, 1));
console.log(numberOfPhotos(2, 1));
console.log(numberOfPhotos(4, 256));
console.log(numberOfPhotos(3.5, 750));
console.log(numberOfPhotos(3.5, 5.5));

// --- TEST SUITE ---

const testsText = `
1. numberOfPhotos(1, 1) should return 1000.
2. numberOfPhotos(2, 1) should return 500.
3. numberOfPhotos(4, 256) should return 64000.
4. numberOfPhotos(3.5, 750) should return 214285.
5. numberOfPhotos(3.5, 5.5) should return 1571.
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