function getLaptopCost(laptops, budget) {
  const prices = [...new Set(laptops.sort((a, b) => b - a))];

  if (prices[1] <= budget) {
    return prices[1];
  }

  else {
    for (let i = 2; i < prices.length; i ++) {
      if (prices[i] <= budget)
        return prices[i];
    }
  }

  return 0;
}

console.log(getLaptopCost([1500, 2000, 1800, 1400], 1900));
console.log(getLaptopCost([1500, 2000, 2000, 1800, 1400], 1900));
console.log(getLaptopCost([2099, 1599, 1899, 1499], 2200));
console.log(getLaptopCost([2099, 1599, 1899, 1499], 1000));
console.log(getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450));
console.log(getLaptopCost([1000, 2000], 500));
console.log(getLaptopCost([1000, 2000], 3000));
console.log(getLaptopCost([1000, 2000], 1500));
console.log(getLaptopCost([1000], 1500));

// --- TEST SUITE ---

const testsText = `
1. getLaptopCost([1500, 2000, 1800, 1400], 1900) should return 1800
2. getLaptopCost([1500, 2000, 2000, 1800, 1400], 1900) should return 1800
3. getLaptopCost([2099, 1599, 1899, 1499], 2200) should return 1899
4. getLaptopCost([2099, 1599, 1899, 1499], 1000) should return 0
5. getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450) should return 1400
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