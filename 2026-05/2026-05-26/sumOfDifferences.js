function sumOfDifferences(arr) {

  return arr.reduce((acc, number, index, source) => acc + (source[index + 1] || source.at(-1)) - number, 0);
}

// --- TEST SUITE ---

const testsText = String.raw`
1. sumOfDifferences([1, 3, 4]) should return 3.
2. sumOfDifferences([5, -3, 3, 9, 10]) should return 5.
3. sumOfDifferences([9, 6, 15, -20, 33, 14, 25, 16, -7]) should return -16.
4. sumOfDifferences([50, 102, -46, 82, -49, 29, 71, 902, -237, 111, -61, 75]) should return 25.
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