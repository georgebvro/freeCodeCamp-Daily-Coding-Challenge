function getBingoRange(letter) {
  const BINGO_RANGES = {
    "B": "1-15",
    "I": "16-30",
    "N": "31-45",
    "G": "46-60",
    "O": "61-75",
  };
  let { min, max } = /^(?<min>\d{1,2})-(?<max>\d{2})$/.exec(BINGO_RANGES[letter]).groups;
  min = Number(min);

  return Array.from({ length: max - min + 1 }, (_, i) => min + i);
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getBingoRange("B") should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].
2. getBingoRange("I") should return [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].
3. getBingoRange("N") should return [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45].
4. getBingoRange("G") should return [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60].
5. getBingoRange("O") should return [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75].
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