function getLoanSchedule(loanAmount, annualRate, monthlyPayment) {
  let remainingBalance = loanAmount;
  const balances = [loanAmount];

  while (remainingBalance > 0) {
    remainingBalance += remainingBalance * annualRate / 100 / 12 - monthlyPayment;
    balances.push(remainingBalance > 0 ? Math.round(remainingBalance) : 0);
  }

  return balances;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getLoanSchedule(1000, 0, 200) should return [1000, 800, 600, 400, 200, 0].
2. getLoanSchedule(1000, 5, 200) should return [1000, 804, 608, 410, 212, 13, 0].
3. getLoanSchedule(10, 50, 1) should return [10, 9, 9, 8, 8, 7, 6, 5, 5, 4, 3, 2, 1, 0, 0].
4. getLoanSchedule(5500, 8, 400) should return [5500, 5137, 4771, 4403, 4032, 3659, 3283, 2905, 2525, 2141, 1756, 1367, 977, 583, 187, 0].
5. getLoanSchedule(50000, 5.2, 1650) should return [50000, 48567, 47127, 45681, 44229, 42771, 41306, 39835, 38358, 36874, 35384, 33887, 32384, 30874, 29358, 27835, 26306, 24770, 23227, 21678, 20122, 18559, 16990, 15413, 13830, 12240, 10643, 9039, 7428, 5810, 4186, 2554, 915, 0].
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