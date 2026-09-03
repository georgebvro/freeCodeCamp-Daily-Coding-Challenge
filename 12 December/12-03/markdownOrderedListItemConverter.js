function convertListItem(markdown) {
  const matchResult = /^\s*\d+\.\s+(?<listItemText>.*)/.exec(markdown)?.groups;

  if (matchResult)
    return `<li>${matchResult.listItemText}</li>`;

  else
    return "Invalid format";
}

// --- TEST SUITE ---

const testsText = `
1. convertListItem("1. My item") should return "<li>My item</li>".
2. convertListItem(" 1.  Another item") should return "<li>Another item</li>".
3. convertListItem("1 . invalid item") should return "Invalid format".
4. convertListItem("2. list item text") should return "<li>list item text</li>".
5. convertListItem(". invalid again") should return "Invalid format".
6. convertListItem("A. last invalid") should return "Invalid format".
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

  for (const index in a)
    if (a[index] !== b[index])
      return false;
  
  return true;
}

runTests(testData);