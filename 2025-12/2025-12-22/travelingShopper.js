function buyItems(funds, items) {
  const exchangeRates = new Map([
    ['USD', 1.00],
    ['EUR',	1.10],
    ['GBP',	1.25],
    ['JPY',	0.0070],
    ['CAD',	0.75]
  ]);
  let amountRemainingUsd = funds[0] * exchangeRates.get(funds[1]);
  let affordedItemsCount = 0;

  for (const item of items) {
    amountRemainingUsd -= item[0] * exchangeRates.get(item[1]);

    if (amountRemainingUsd < 0)
      return `Buy the first ${affordedItemsCount} items.`;

    ++affordedItemsCount;
  }

  return "Buy them all!";
}

console.log(buyItems(["150.00", "USD"], [["50.00", "USD"], ["75.00", "USD"], ["30.00", "USD"]]));
console.log(buyItems(["200.00", "EUR"], [["50.00", "USD"], ["50.00", "USD"]]));
console.log(buyItems(["100.00", "CAD"], [["20.00", "USD"], ["15.00", "EUR"], ["10.00", "GBP"], ["6000", "JPY"], ["5.00", "CAD"], ["10.00", "USD"]]));
console.log(buyItems(["5000", "JPY"], [["3.00", "USD"], ["1000", "JPY"], ["5.00", "CAD"], ["2.00", "EUR"], ["4.00", "USD"], ["2000", "JPY"]]));
console.log(buyItems(["200.00", "USD"], [["50.00", "USD"], ["40.00", "EUR"], ["30.00", "GBP"], ["5000", "JPY"], ["25.00", "CAD"], ["20.00", "USD"]]));

console.log(buyItems(["100.00", "USD"], [["50.00", "USD"], ["50.00", "USD"]]));
console.log(buyItems(["0.00", "USD"], [["50.00", "USD"], ["50.00", "USD"]]));

// --- TEST SUITE ---

const testsText = `
1. buyItems(["150.00", "USD"], [["50.00", "USD"], ["75.00", "USD"], ["30.00", "USD"]]) should return "Buy the first 2 items.".
2. buyItems(["200.00", "EUR"], [["50.00", "USD"], ["50.00", "USD"]]) should return "Buy them all!".
3. buyItems(["100.00", "CAD"], [["20.00", "USD"], ["15.00", "EUR"], ["10.00", "GBP"], ["6000", "JPY"], ["5.00", "CAD"], ["10.00", "USD"]]) should return "Buy the first 3 items.".
4. buyItems(["5000", "JPY"], [["3.00", "USD"], ["1000", "JPY"], ["5.00", "CAD"], ["2.00", "EUR"], ["4.00", "USD"], ["2000", "JPY"]]) should return "Buy them all!".
5. buyItems(["200.00", "USD"], [["50.00", "USD"], ["40.00", "EUR"], ["30.00", "GBP"], ["5000", "JPY"], ["25.00", "CAD"], ["20.00", "USD"]]) should return "Buy the first 5 items.".
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("--------------------------");
  console.log("🧪Starting Verification...");
  console.log("--------------------------");

  let allPassed = true;
  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(test.output);
    let comparison;

    if (Array.isArray(testOutput))
      comparison = arraysEqual(functionCallOutput, testOutput);
    else
      comparison = functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    }
    else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      allPassed = false;
      failCount ++;
    }
  })

  console.log("----------------------------");

  if (allPassed)
    console.log("🎉SUCCESS: All tests PASSED.");
  else
    console.log(`⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`);
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