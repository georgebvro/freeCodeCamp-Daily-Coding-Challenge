function isValidIsbn13(str) {
  if (/[^\d-]/.exec(str)) {
    return false;
  }

  const strippedOfDashes = str.replaceAll("-", "");

  if (strippedOfDashes.length !== 13) {
    return false;
  }

  return !(strippedOfDashes
    .split("")
    .reduce((acc, digit, index) => acc + digit * (index % 2 ? 3 : 1), 0) 
    % 10
  );
}

// --- TEST SUITE ---

const testsText = String.raw`
1. isValidIsbn13("9780306406157") should return true.
2. isValidIsbn13("97803064061570") should return false.
3. isValidIsbn13("978-0-13-595705-9") should return true.
4. isValidIsbn13("978-030-64061A-4") should return false.
5. isValidIsbn13("9-7-8-0-1-3-4-7-5-7-5-9-9") should return true.
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