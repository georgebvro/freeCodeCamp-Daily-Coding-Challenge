function evaluate(numbers, operators) {
  let result = numbers[0];

  for (let i = 1; i < numbers.length; i ++) {
    const operand = numbers[i];
    const operator = operators[(i - 1) % operators.length];
    result = eval(result + operator + operand);
  }
  
  return result;
}

console.log(evaluate([5, 6, 7, 8, 9], ['+', '-']));
console.log(evaluate([17, 61, 40, 24, 38, 14], ['+', '%']));
console.log(evaluate([20, 2, 4, 24, 12, 3], ['*', '/']));
console.log(evaluate([11, 4, 10, 17, 2], ['*', '*', '%']));
console.log(evaluate([33, 11, 29, 13], ['/', '-']));
console.log(evaluate([1, 2], ['+']));
console.log(evaluate([2], ['%']));
console.log(evaluate([1, 2, 3], ['-']));

// --- TEST SUITE ---

const testsText = `
1. evaluate([5, 6, 7, 8, 9], ['+', '-']) should return 3
2. evaluate([17, 61, 40, 24, 38, 14], ['+', '%']) should return 38
3. evaluate([20, 2, 4, 24, 12, 3], ['*', '/']) should return 60
4. evaluate([11, 4, 10, 17, 2], ['*', '*', '%']) should return 30
5. evaluate([33, 11, 29, 13], ['/', '-']) should return -2
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