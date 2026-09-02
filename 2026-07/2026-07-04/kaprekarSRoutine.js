function kaprekar(n) {
  let count = 0;

  while (n !== 6174) {
    const digitsArray = String(n).split("");
    const largestNumber = digitsArray.sort((a, b) => b - a).join("");
    const smallestNumber = digitsArray.sort().join("");
    console.log(largestNumber, smallestNumber)
    n = largestNumber - smallestNumber;
    ++count;
  }

  return count;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. kaprekar(1234) should return 3.
2. kaprekar(2025) should return 6.
3. kaprekar(7173) should return 4.
4. kaprekar(3164) should return 7.
5. kaprekar(8082) should return 2.
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