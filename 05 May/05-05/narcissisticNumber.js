function isNarcissistic(n) {
  const nString = String(n);
  const lenghtOfN = nString.length;

  return nString
    .split("")
    .reduce((acc, digit) => acc + digit ** lenghtOfN, 0)
    === n;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. isNarcissistic(153) should return true.
2. isNarcissistic(154) should return false.
3. isNarcissistic(371) should return true.
4. isNarcissistic(512) should return false.
5. isNarcissistic(9) should return true.
6. isNarcissistic(11) should return false.
7. isNarcissistic(9474) should return true.
8. isNarcissistic(6549) should return false.
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
    const testOutput = eval(`(${test.output})`);

    if (JSON.stringify(functionCallOutput) === JSON.stringify(testOutput)) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    } else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${JSON.stringify(testOutput)}\nGot: ${JSON.stringify(functionCallOutput)}`);

      ++failCount;
    }
    console.log("————————————————————————————");
  })

  console.log(failCount
    ? `⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`
    : "🎉SUCCESS: All tests PASSED."
  );
}

runTests(testData);