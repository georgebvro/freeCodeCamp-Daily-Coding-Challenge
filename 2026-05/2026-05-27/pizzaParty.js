function getPizzasToOrder(hoursWorked) {
  const HOURS_WORKED_PER_SLICE = 3;
  const MINIMUM_SLICES_PER_PERSON = 2;
  const SLICES_PER_PIZZA = 8;

  return Math.ceil(hoursWorked.reduce((acc, hours) => {
    const personSSliceCount = Math.ceil(hours / HOURS_WORKED_PER_SLICE);

    return acc + (personSSliceCount < MINIMUM_SLICES_PER_PERSON ? MINIMUM_SLICES_PER_PERSON : personSSliceCount);
  }, 0) / SLICES_PER_PIZZA);
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getPizzasToOrder([8, 8, 8]) should return 2.
2. getPizzasToOrder([10, 9, 8, 2, 2, 6, 10]) should return 3.
3. getPizzasToOrder([1, 2, 3, 4, 5]) should return 2.
4. getPizzasToOrder([8, 8, 8, 8, 8, 8, 8, 8]) should return 3.
5. getPizzasToOrder([9, 9, 6]) should return 1.
6. getPizzasToOrder([10, 12, 16, 9, 8, 11, 15, 8, 0]) should return 5.
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