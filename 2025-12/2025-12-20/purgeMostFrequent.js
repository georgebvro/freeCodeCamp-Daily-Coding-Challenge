function purgeMostFrequent(arr) {
  const counts = {};
  let maxCount = 0;
  let elementsToRemove = new Set();
  
  arr.forEach(element => counts[element] = (counts[element] || 0) + 1);

  for (let element in counts) {
    if (counts[element] > maxCount) {
      elementsToRemove = new Set().add(parseInt(element) || element);
      maxCount = counts[element];
    }
    else if (counts[element] === maxCount) {
      elementsToRemove.add(parseInt(element) || element);
    }
  }

  return arr.filter(element => !elementsToRemove.has(element));
}

console.log(purgeMostFrequent([1, 2, 2, 3]));
console.log(purgeMostFrequent(["a", "b", "d", "b", "c", "d", "c", "d", "c", "d"]));
console.log(purgeMostFrequent(["red", "blue", "green", "red", "blue", "green", "blue"]));
console.log(purgeMostFrequent([5, 5, 5, 5]));

console.log(purgeMostFrequent([1, 1, 2, 2, 3]));

// --- TEST SUITE ---

const testsText = `
1. purgeMostFrequent([1, 2, 2, 3]) should return [1, 3].
2. purgeMostFrequent(["a", "b", "d", "b", "c", "d", "c", "d", "c", "d"]) should return ["a", "b", "b", "c", "c", "c"].
3. purgeMostFrequent(["red", "blue", "green", "red", "blue", "green", "blue"]) should return ["red", "green", "red", "green"].
4. purgeMostFrequent([5, 5, 5, 5]) should return [].
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