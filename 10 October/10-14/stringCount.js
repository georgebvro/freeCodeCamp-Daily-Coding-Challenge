function count(text, pattern) {

  return [...text.matchAll(new RegExp(`(?=(${pattern}))`, "g"))].length;
}

console.log(count('abcdefg', 'def'));
console.log(count('hello', 'world'));
console.log(count('mississippi', 'iss'));
console.log(count('she sells seashells by the seashore', 'sh'));
console.log(count('101010101010101010101', '101'));

console.log(count("aaa", "aa"));

// --- TEST SUITE ---

const testsText = `
1. count('abcdefg', 'def') should return 1.
2. count('hello', 'world') should return 0.
3. count('mississippi', 'iss') should return 2.
4. count('she sells seashells by the seashore', 'sh') should return 3.
5. count('101010101010101010101', '101') should return 10.
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