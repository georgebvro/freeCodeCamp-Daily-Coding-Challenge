function piggyBank(coins) {
  const COINS = {
    pennies: 0.01,
    nickels: 0.05,
    dimes: 0.10,
    quarters: 0.25
  };

  return `$${Object.entries(coins).reduce((total, coin) => total + COINS[coin[0]] * coin[1], 0).toFixed(2)}`;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. piggyBank({ pennies: 3, nickels: 5, dimes: 2, quarters: 6 }) should return "$1.98".
2. piggyBank({ pennies: 1, nickels: 1, dimes: 1, quarters: 1 }) should return "$0.41".
3. piggyBank({ nickels: 8, dimes: 6, quarters: 5 }) should return "$2.25".
4. piggyBank({}) should return "$0.00".
5. piggyBank({ pennies: 146, nickels: 11, dimes: 0, quarters: 19 }) should return "$6.76".
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