function getMaxProfit(prices, budget) {
  const profitPerShare = prices.map((price, index, source) => {
    let maxProfitPerShare = -Infinity;

    for (let i = index + 1; i < source.length; ++i) {
      const profit = source[i] - price;
      maxProfitPerShare = profit > maxProfitPerShare ? profit : maxProfitPerShare;
    }

    return maxProfitPerShare;
  });

  const buyingDay = profitPerShare.findIndex(profit => profit === Math.max(...profitPerShare));
  let sharesBought = Math.floor(budget / prices[buyingDay]);
  sharesBought = profitPerShare.every(profit => profit < 0) ? 0 : sharesBought;

  return (profitPerShare[buyingDay] * sharesBought).toFixed(2);
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getMaxProfit([5, 6], 50) should return "10.00".
2. getMaxProfit([8, 2, 5, 10], 20) should return "80.00".
3. getMaxProfit([4, 5, 3, 6], 20) should return "18.00".
4. getMaxProfit([54.40, 51.22, 53.99, 50.28, 53.01, 52.84], 200) should return "8.31".
5. getMaxProfit([15.38, 15.01, 14.99, 14.62, 14.28], 80) should return "0.00".
6. getMaxProfit([121.45, 126.82, 122.91, 124.65, 128.83, 128.83, 127.33], 1230.25) should return "73.80".
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