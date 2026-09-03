function spaceJam(s) {
  s = s.replaceAll(" ", "").replace(/(.)/g, "$1  ")

  return s.slice(0, s.length - 2).toUpperCase();
}

console.log(spaceJam("freeCodeCamp"));
console.log(spaceJam("   free   Code   Camp   "));
console.log(spaceJam("Hello World?!"));
console.log(spaceJam("C@t$ & D0g$"));
console.log(spaceJam("allyourbase"));

// --- TEST SUITE ---

const testsText = `
1. spaceJam("freeCodeCamp") should return "F  R  E  E  C  O  D  E  C  A  M  P".
2. spaceJam("   free   Code   Camp   ") should return "F  R  E  E  C  O  D  E  C  A  M  P".
3. spaceJam("Hello World?!") should return "H  E  L  L  O  W  O  R  L  D  ?  !".
4. spaceJam("C@t$ & D0g$") should return "C  @  T  $  &  D  0  G  $".
5. spaceJam("allyourbase") should return "A  L  L  Y  O  U  R  B  A  S  E".
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