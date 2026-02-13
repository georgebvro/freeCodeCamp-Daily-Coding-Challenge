function countChange(change) {
  const totalCents = change.reduce((coin, total) => coin + total);
  const dollars = Math.floor(totalCents / 100);
  const cents = totalCents % 100;

  return `$${dollars}.${cents.toString().padStart(2, "0")}`;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. countChange([25, 10, 5, 1]) should return "$0.41".
2. countChange([25, 10, 5, 1, 25, 10, 25, 1, 1, 10, 5, 25]) should return "$1.43".
3. countChange([100, 25, 100, 1000, 5, 500, 2000, 25]) should return "$37.55".
4. countChange([10, 5, 1, 10, 1, 25, 1, 1, 5, 1, 10]) should return "$0.70".
5. countChange([1]) should return "$0.01".
6. countChange([25, 25, 25, 25]) should return "$1.00".
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("--------------------------");
  console.log("🧪Starting Verification...");
  console.log("--------------------------");

  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(test.output);

    const comparison = Array.isArray(testOutput)
      ? arraysEqual(functionCallOutput, testOutput)
      : functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    }
    else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      ++failCount;
    }
  })

  console.log("----------------------------",
    failCount
    ? `\n⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`
    : "\n🎉SUCCESS: All tests PASSED."
  );
}

function arraysEqual(a, b) {
  if (a.length !== b.length)
    return false;

  for (let i = 0; i < a.length; ++i) {
    if (Array.isArray(a[i])) {
      if (Array.isArray(b[i])) {
        if (!arraysEqual(a[i], b[i]))
          return false;
      }
      else 
        return false;
    }

    else if (a[i] !== b[i])
      return false;
  }

  return true;
}

runTests(testData);