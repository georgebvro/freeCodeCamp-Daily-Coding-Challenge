function getExtension(filename) {

  return /\.(?<extension>[^\.]*)$/g
    .exec(filename)
    ?.groups
    ?.extension
    || "none";
}

console.log(getExtension("document.txt"));
console.log(getExtension("README"));
console.log(getExtension("image.PNG"));
console.log(getExtension(".gitignore"));
console.log(getExtension("archive.tar.gz"));
console.log(getExtension("final.draft."));

// --- TEST SUITE ---

const testsText = `
1. getExtension("document.txt") should return "txt".
2. getExtension("README") should return "none".
3. getExtension("image.PNG") should return "PNG".
4. getExtension(".gitignore") should return "gitignore".
5. getExtension("archive.tar.gz") should return "gz".
6. getExtension("final.draft.") should return "none".
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