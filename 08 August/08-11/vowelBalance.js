function isBalanced(s) {
  const regex = /[aeiou]/gi;

  const firstHalf = s.slice(0, s.length / 2);
  const secondHalf = s.slice(Math.ceil(s.length / 2));

  return (firstHalf.match(regex) || "").length === (secondHalf.match(regex) || "").length;
}

console.log(isBalanced("racecar"));
console.log(isBalanced("Lorem Ipsum"));
console.log(isBalanced("Kitty Ipsum"));
console.log(isBalanced("string"));
console.log(isBalanced(" "));
console.log(isBalanced("abcdefghijklmnopqrstuvwxyz"));
console.log(isBalanced("123A#b!E&*456-o.U"));

console.log(isBalanced("a"));

// --- TEST SUITE ---

const testsText = `
1. isBalanced("racecar") should return true.
2. isBalanced("Lorem Ipsum") should return true.
3. isBalanced("Kitty Ipsum") should return false.
4. isBalanced("string") should return false.
5. isBalanced(" ") should return true.
6. isBalanced("abcdefghijklmnopqrstuvwxyz") should return false.
7. isBalanced("123A#b!E&*456-o.U") should return true.
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+)\.$/gm;
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