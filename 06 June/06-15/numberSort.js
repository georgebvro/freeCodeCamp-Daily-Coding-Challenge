function sortNumbers(str) {

  return str
    .split(",")
    .map(number => Number(number))
    .sort((a, b) => a - b);
}

// --- TEST SUITE ---

const testsText = String.raw`
1. sortNumbers("3,1,2") should return [1, 2, 3].
2. sortNumbers("5,3,8,1,9,2") should return [1, 2, 3, 5, 8, 9].
3. sortNumbers("12,61,49,80,19,50,77,38") should return [12, 19, 38, 49, 50, 61, 77, 80].
4. sortNumbers("0,6,-19,44,-2,7,0") should return [-19, -2, 0, 0, 6, 7, 44].
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