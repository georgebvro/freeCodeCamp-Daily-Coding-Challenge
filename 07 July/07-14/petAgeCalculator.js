function petYears(pet, age) {
  const CONVERSION_TABLE = {
    'dog': 7,
    'cat': 6,
    'rabbit': 8,
    'hamster': 30,
    'guinea pig': 12,
    'goldfish': 6,
    'bird': 5
  };

  return age * CONVERSION_TABLE[pet];
}

// --- TEST SUITE ---

const testsText = String.raw`
1. petYears("dog", 5) should return 35.
2. petYears("cat", 9) should return 54.
3. petYears("rabbit", 3) should return 24.
4. petYears("hamster", 4) should return 120.
5. petYears("guinea pig", 5) should return 60.
6. petYears("goldfish", 2) should return 12.
7. petYears("bird", 1) should return 5.
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