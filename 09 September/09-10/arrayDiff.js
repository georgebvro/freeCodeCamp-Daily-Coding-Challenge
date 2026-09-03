function arrayDiff(arr1, arr2) {
	
  return arr1
    .filter(element1 => !arr2.some(element2 => element1 === element2))
    .concat(arr2.filter(element2 => !arr1.some(element1 => element2 === element1)))
    .sort();
}

console.log(arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"]));
console.log(arrayDiff(["apple", "banana", "cherry"], ["apple", "banana"]));
console.log(arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"]));
console.log(arrayDiff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"]));
console.log(arrayDiff(["I like freeCodeCamp"], ["I like rocks"]));

// --- TEST SUITE ---

const testsText = `
1. arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"]) should return ["cherry"].
2. arrayDiff(["apple", "banana", "cherry"], ["apple", "banana"]) should return ["cherry"].
3. arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"]) should return ["eight", "four", "six", "two"].
4. arrayDiff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"]) should return ["five", "one", "seven", "three"].
5. arrayDiff(["I", "like", "freeCodeCamp"], ["I", "like", "rocks"]) should return ["freeCodeCamp", "rocks"].
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