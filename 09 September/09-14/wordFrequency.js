function getWords(paragraph) {
  
  return paragraph
    .split(/[ ,\.!]/)
    .filter(word => word !== "")
    .map(word => word.toLowerCase())
    .reduce((arr, word) => {
      const index = arr.findIndex(wordObject => wordObject.name === word);
    
      if (index === -1)
        arr.push({ name: word, count: 1 });
      else
        arr[index].count ++;

      return arr;
    }, [])
    .sort((a, b) => b.count - a.count)
    .slice(0, 3)
    .map(wordObject => wordObject.name);
}

console.log(getWords("Coding in Python is fun because coding Python allows for coding in Python easily while coding"));
console.log(getWords("I like coding. I like testing. I love debugging!"));
console.log(getWords("Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!"));

console.log(getWords("A b b c c c"));

// --- TEST SUITE ---

const testsText = `
1. getWords("Coding in Python is fun because coding Python allows for coding in Python easily while coding") should return ["coding", "python", "in"].
2. getWords("I like coding. I like testing. I love debugging!") should return ["i", "like", "coding"].
3. getWords("Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!") should return ["debug", "test", "deploy"].
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