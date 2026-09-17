function exactChange(amount) {
/* Bottom-up approach using tabulation (iterative solution)
  const DENOMINATIONS = [1, 5, 10, 25];

  const distinctWays = Array.from({ length: amount + 1 }, (_, index) => index === 0 ? 1 : 0);

  for (const denomination of DENOMINATIONS) {
    for (let i = denomination; i <= amount; ++i) {
      distinctWays[i] += distinctWays[i - denomination];
    }
  }

  return distinctWays[amount];
*/

// Top-down approach using memoization (recursive solution)
  const DENOMINATIONS = [25, 10, 5, 1];
  const cache = new Map();

  const countWays = (amountRemaining, coinIndex) => {
    const key = `${amountRemaining}_${coinIndex}`;

    if (cache.has(key)) {
      return cache.get(key);
    }

    if (amountRemaining === 0) {
      cache.set(key, 1);
      return 1;
    }

    let distinctWaysCount = 0;

    for (let i = coinIndex; i < DENOMINATIONS.length; ++i) {
      if (DENOMINATIONS[i] <= amountRemaining) {
        distinctWaysCount += countWays(amountRemaining - DENOMINATIONS[i], i);
      }
    }

    cache.set(key, distinctWaysCount);

    return distinctWaysCount;
  }

  return countWays(amount, 0);
}

// --- TEST SUITE ---

const testsText = String.raw`
1. exactChange(3) should return 1.
2. exactChange(9) should return 2.
3. exactChange(17) should return 6.
4. exactChange(39) should return 24.
5. exactChange(61) should return 73.
6. exactChange(99) should return 213.
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