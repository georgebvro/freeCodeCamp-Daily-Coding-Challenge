function getsFreeShipping(cart, minimum) {
  const itemPrices = new Map([
    ['shirt', 34.25],
    ['jeans', 48.50],
    ['shoes', 75.00],
    ['hat', 19.95],
    ['socks', 15.00],
    ['jacket', 109.95]
  ]);
  
  return cart.reduce((total, item) => total + itemPrices.get(item), 0) >= minimum;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getsFreeShipping(["shoes"], 50) should return true.
2. getsFreeShipping(["hat", "socks"], 50) should return false.
3. getsFreeShipping(["jeans", "shirt", "jacket"], 75) should return true.
4. getsFreeShipping(["socks", "socks", "hat"], 75) should return false.
5. getsFreeShipping(["shirt", "shirt", "jeans", "socks"], 100) should return true.
6. getsFreeShipping(["hat", "socks", "hat", "jeans", "shoes", "hat"], 200) should return false.
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("--------------------------");
  console.log("🧪Starting Verification...");
  console.log("--------------------------");

  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(test.output);

    const comparison = Array.isArray(testOutput)
      ? arraysEqual(functionCallOutput, testOutput)
      : functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    }
    else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      ++failCount;
    }
  })

  console.log("----------------------------",
    failCount
    ? `\n⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`
    : "\n🎉SUCCESS: All tests PASSED."
  );
}

function arraysEqual(a, b) {
  if (a.length !== b.length)
    return false;

  for (let i = 0; i < a.length; ++i) {
    if (Array.isArray(a[i])) {
      if (Array.isArray(b[i])) {
        if (!arraysEqual(a[i], b[i]))
          return false;
      }
      else 
        return false;
    }

    else if (a[i] !== b[i])
      return false;
  }

  return true;
}

runTests(testData);