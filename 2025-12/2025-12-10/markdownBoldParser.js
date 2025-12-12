function parseBold(markdown) {

  return markdown.replaceAll(/(\*\*|__)([^ ].*?[^ ])\1/g, "<b>$2</b>");
}

console.log(parseBold("**This is bold**"));
console.log(parseBold("__This is also bold__"));
console.log(parseBold("**This is not bold **"));
console.log(parseBold("__ This is also not bold__"));
console.log(parseBold("The **quick** brown fox __jumps__ over the **lazy** dog."));

// --- TEST SUITE ---

const testsText = `
1. parseBold("**This is bold**") should return "<b>This is bold</b>".
2. parseBold("__This is also bold__") should return "<b>This is also bold</b>".
3. parseBold("**This is not bold **") should return "**This is not bold **".
4. parseBold("__ This is also not bold__") should return "__ This is also not bold__".
5. parseBold("The **quick** brown fox __jumps__ over the **lazy** dog.") should return "The <b>quick</b> brown fox <b>jumps</b> over the <b>lazy</b> dog.".
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