function calculateTips(mealPrice, customTip) {
  const { mealPriceValue } = /\$(?<mealPricevalue>\d+\.\d+)/.exec(mealPrice).groups;
  const { customTipValue } = /(?<customTipValue>\d+)%/.exec(customTip).groups;
  
  const tip15 = `$${parseFloat(mealPriceValue * 15 / 100).toFixed(2)}`;
  const tip20 = `$${parseFloat(mealPriceValue * 20 / 100).toFixed(2)}`;
  const tipCustom = `$${parseFloat(mealPriceValue * customTipValue / 100).toFixed(2)}`;

  return [ tip15, tip20, tipCustom ];
}

console.log(calculateTips("$10.00", "25%"));
console.log(calculateTips("$89.67", "26%"));
console.log(calculateTips("$19.85", "9%"));

// --- TEST SUITE ---

const testsText = `
1. calculateTips("$10.00", "25%") should return ["$1.50", "$2.00", "$2.50"].
2. calculateTips("$89.67", "26%") should return ["$13.45", "$17.93", "$23.31"].
3. calculateTips("$19.85", "9%") should return ["$2.98", "$3.97", "$1.79"].
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

  for (const index in a) {
    if (Array.isArray(a[index])) {
      if (Array.isArray(b[index])) {
        if (!arraysEqual(a[index], b[index]))
          return false;
      }
      else 
        return false;
    }

    else if (a[index] !== b[index])
      return false;
  }

  return true;
}

runTests(testData);