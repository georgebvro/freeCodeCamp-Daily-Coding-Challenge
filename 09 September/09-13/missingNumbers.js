function findMissingNumbers(arr) {
  const missingNumbers = [];
  
  for (let i = 1; i <= Math.max(...arr); i ++) {
    if (!arr.find(number => number === i))
      missingNumbers.push(i);
  }

  return missingNumbers;
}

console.log(findMissingNumbers([1, 3, 5]));
console.log(findMissingNumbers([1, 2, 3, 4, 5]));
console.log(findMissingNumbers([1, 10]));
console.log(findMissingNumbers([10, 1, 10, 1, 10, 1]));
console.log(findMissingNumbers([3, 1, 4, 1, 5, 9]));
console.log(findMissingNumbers([1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4]));

// --- TEST SUITE ---

const testsText = `
1. findMissingNumbers([1, 3, 5]) should return [2, 4].
2. findMissingNumbers([1, 2, 3, 4, 5]) should return [].
3. findMissingNumbers([1, 10]) should return [2, 3, 4, 5, 6, 7, 8, 9].
4. findMissingNumbers([10, 1, 10, 1, 10, 1]) should return [2, 3, 4, 5, 6, 7, 8, 9].
5. findMissingNumbers([3, 1, 4, 1, 5, 9]) should return [2, 6, 7, 8].
6. findMissingNumbers([1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4]) should return [11].
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