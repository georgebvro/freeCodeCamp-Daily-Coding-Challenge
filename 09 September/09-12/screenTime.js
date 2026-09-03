function tooMuchScreenTime(hours) {
  
  if (hours.find(day => day >= 10)) {
    return true;
  }

  for (let i = 0; i < hours.length - 2; i ++) {
      if ((hours[i] + hours[i + 1] + hours[i + 2]) / 3 >= 8)
        return true;
  }
  
  if ((hours.reduce((acc, day) => acc + day)) / hours.length >= 6) {
    return true;
  }

  return false;
}

console.log(tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7]));
console.log(tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3]));
console.log(tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6]));
console.log(tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4]));
console.log(tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0]));
console.log(tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4]));
console.log(tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6]));

// --- TEST SUITE ---

const testsText = `
1. tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7]) should return false.
2. tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3]) should return false.
3. tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6]) should return false.
4. tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4]) should return true.
5. tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0]) should return true.
6. tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4]) should return true.
7. tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6]) should return true.
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