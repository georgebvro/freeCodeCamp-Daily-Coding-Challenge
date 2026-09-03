function isMirror(str1, str2) {

  return str1.replace(/[^a-zA-Z]/g, "") === 
    str2.replace(/[^a-zA-Z]/g, "")
        .split("")
        .reverse()
        .join("");
}

console.log(isMirror("helloworld", "helloworld"));
console.log(isMirror("Hello World", "dlroW olleH"));
console.log(isMirror("RaceCar", "raCecaR"));
console.log(isMirror("RaceCar", "RaceCar"));
console.log(isMirror("Mirror", "rorrim"));
console.log(isMirror("Hello World", "dlroW-olleH"));
console.log(isMirror("Hello World", "!dlroW !olleH"));

// --- TEST SUITE ---

const testsText = `
1. isMirror("helloworld", "helloworld") should return false.
2. isMirror("Hello World", "dlroW olleH") should return true.
3. isMirror("RaceCar", "raCecaR") should return true.
4. isMirror("RaceCar", "RaceCar") should return false.
5. isMirror("Mirror", "rorrim") should return false.
6. isMirror("Hello World", "dlroW-olleH") should return true.
7. isMirror("Hello World", "!dlroW !olleH") should return true.
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