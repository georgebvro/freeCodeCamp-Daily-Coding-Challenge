function isValidCard(number) {
  let doubleIt = true;
  let sum = 0;

  for (let i = number.length - 1; i >= 0; --i) {
    doubleIt = !doubleIt;
    let computedDigit = Number(number[i]);

    if (doubleIt) {
      computedDigit *= 2;
      computedDigit = computedDigit > 9 ? computedDigit - 9 : computedDigit;
    }

    sum += computedDigit;
  }

  return !(sum % 10);
}

// --- TEST SUITE ---

const testsText = String.raw`
1. isValidCard("4532015112830366") should return true.
2. isValidCard("5425233430109903") should return true.
3. isValidCard("371449635398431") should return true.
4. isValidCard("6011111111111117") should return true.
5. isValidCard("4532015112830367") should return false.
6. isValidCard("1234567890123456") should return false.
7. isValidCard("4532015112830368") should return false.
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