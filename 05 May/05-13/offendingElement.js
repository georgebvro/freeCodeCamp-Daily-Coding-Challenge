function findOffender(arr) {
  
  return arr.findIndex((element, index, source) => {
    const leftElement = source[index - 1] || -Infinity;
    const rightElement = source[index + 1] || Infinity;

    if (!(leftElement <= element && element <= rightElement) && leftElement <= rightElement) {
      return true;
    }
  });
}

// --- TEST SUITE ---

const testsText = String.raw`
1. findOffender([1, 6, 2, 3, 4, 5]) should return 1.
2. findOffender([1, 2, 3, 5, 4, 5]) should return 3.
3. findOffender([2, 1]) should return 0.
4. findOffender([2, 4, 1, 6, 8]) should return 2.
5. findOffender([5, 18, 24, 33, 40, 55, 15, 68, 84, 91]) should return 6.
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