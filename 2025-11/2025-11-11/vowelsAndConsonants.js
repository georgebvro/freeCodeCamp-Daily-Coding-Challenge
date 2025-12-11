function count(str) {

  return [
    str.match(/[aeiou]/gi)?.length ?? 0, 
    str.match(/[b-df-hj-np-tv-z]/gi)?.length ?? 0
  ];
}

console.log(count("Hello World"));
console.log(count("JavaScript"));
console.log(count("Python"));
console.log(count("freeCodeCamp"));
console.log(count("Hello, World!"));
console.log(count("The quick brown fox jumps over the lazy dog."));

console.log(count("xyz"));
console.log(count("oua"));
console.log(count("!@#"));

// --- TEST SUITE ---

const testsText = `
1. count("Hello World") should return [3, 7].
2. count("JavaScript") should return [3, 7].
3. count("Python") should return [1, 5].
4. count("freeCodeCamp") should return [5, 7].
5. count("Hello, World!") should return [3, 7].
6. count("The quick brown fox jumps over the lazy dog.") should return [11, 24].
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