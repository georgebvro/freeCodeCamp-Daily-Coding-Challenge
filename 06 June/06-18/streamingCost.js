function getStreamingBill(cart, subscription) {
  const MOVIE_COSTS = {
    'HD': { 'rent': 3.99, 'buy': 12.99 },
    '4K': { 'rent': 5.99, 'buy': 19.99 }
  };
  const DISCOUNTS = {
    'none': 0,
    'basic': 10,
    'premium': 25
  };

  const total = cart.reduce((acc, movie) => acc + MOVIE_COSTS[movie['format']][movie['type']], 0);

  return `$${(total * (100 - DISCOUNTS[subscription]) / 100).toFixed(2)}`;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getStreamingBill([{ format: "HD", type: "rent" }], "none") should return "$3.99".
2. getStreamingBill([{ format: "HD", type: "buy" }], "premium") should return "$9.74".
3. getStreamingBill([{ format: "HD", type: "rent" }, { format: "HD", type: "rent" }, { format: "HD", type: "buy" }], "basic") should return "$18.87".
4. getStreamingBill([{ format: "4K", type: "buy" }, { format: "4K", type: "buy" }, { format: "4K", type: "buy" }], "premium") should return "$44.98".
5. getStreamingBill([{ format: "HD", type: "rent" }, { format: "4K", type: "rent" }, { format: "HD", type: "buy" }, { format: "4K", type: "buy" }], "none") should return "$42.96".
6. getStreamingBill([{ format: "HD", type: "rent" }, { format: "4K", type: "rent" }, { format: "HD", type: "buy" }, { format: "4K", type: "buy" }], "basic") should return "$38.66".
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