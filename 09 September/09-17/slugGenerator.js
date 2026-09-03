function generateSlug(str) {

  return str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/ +/g, " ")
    .replace(/ /g, "%20");
}

console.log(generateSlug("helloWorld"));
console.log(generateSlug("hello world!"));
console.log(generateSlug(" hello-world "));
console.log(generateSlug("hello  world"));
console.log(generateSlug("  ?H^3-1*1]0! W[0%R#1]D  "));

console.log(generateSlug(" one two  three   4   5  "));

// --- TEST SUITE ---

const testsText = `
1. generateSlug("helloWorld") should return "helloworld".
2. generateSlug("hello world!") should return "hello%20world".
3. generateSlug(" hello-world ") should return "helloworld".
4. generateSlug("hello  world") should return "hello%20world".
5. generateSlug("  ?H^3-1*1]0! W[0%R#1]D  ") should return "h3110%20w0r1d".
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