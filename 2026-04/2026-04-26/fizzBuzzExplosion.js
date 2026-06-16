function explodeFizzbuzz(targetZCount) {
  const START_STRING = "fizzbuzz";
  let explodedString = START_STRING;
  let stepCount = 0;

  while([...explodedString.matchAll(/z/g)].length < targetZCount) {
    explodedString = explodedString
      .split("")
      .map((letter, index) => !((index + 1) % (3 * 5)) ? "fizzbuzz" : !((index + 1 ) % 3) ? "fizz" : !((index + 1 ) % 5) ? "buzz" : letter)
      .join("");
      
    ++stepCount;
  }

  return stepCount;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. explodeFizzbuzz(9) should return 1.
2. explodeFizzbuzz(15) should return 2.
3. explodeFizzbuzz(51) should return 3.
4. explodeFizzbuzz(52) should return 4.
5. explodeFizzbuzz(359) should return 5.
6. explodeFizzbuzz(789) should return 6.
7. explodeFizzbuzz(54482) should return 11.
8. explodeFizzbuzz(1000000) should return 14.
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("——————————————————————————",
            "\n🧪Starting Verification...",
            "\n——————————————————————————");

  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(test.output);

    const comparison = Array.isArray(testOutput)
      ? arraysEqual(functionCallOutput, testOutput)
      : functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    } else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      ++failCount;
    }
    console.log("————————————————————————————");
  })

  console.log(failCount
    ? `⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`
    : "🎉SUCCESS: All tests PASSED."
  );
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (Array.isArray(a[i])) {
      if (Array.isArray(b[i])) {
        if (!arraysEqual(a[i], b[i])) {
          return false;
        }
      } else {
        return false;
      }
    } else if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

runTests(testData);