function convert(heading) {
  const matchResult = /^ *(?<headingLevel>#{1,6}) +(?<headingText>.+)/.exec(heading)?.groups;
  
  if(!matchResult)
    return "Invalid format";

  const { headingLevel, headingText } = matchResult;

  return `<h${headingLevel.length}>${headingText}</h${headingLevel.length}>`;
}

console.log(convert("# My level 1 heading"));
console.log(convert("My heading"));
console.log(convert("##### My level 5 heading"));
console.log(convert("#My heading"));
console.log(convert("  ###  My level 3 heading"));
console.log(convert("####### My level 7 heading"));
console.log(convert("## My #2 heading"));

// --- TEST SUITE ---

const testsText = `
1. convert("# My level 1 heading") should return "<h1>My level 1 heading</h1>".
2. convert("My heading") should return "Invalid format".
3. convert("##### My level 5 heading") should return "<h5>My level 5 heading</h5>".
4. convert("#My heading") should return "Invalid format".
5. convert("  ###  My level 3 heading") should return "<h3>My level 3 heading</h3>".
6. convert("####### My level 7 heading") should return "Invalid format".
7. convert("## My #2 heading") should return "<h2>My #2 heading</h2>".
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+)\.$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("---------------------------");
  console.log("🧪 Starting Verification...");
  console.log("---------------------------");

  let allPassed = true;
  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(test.output);

    if (functionCallOutput === testOutput) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    }
    else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      allPassed = false;
      failCount ++;
    }
  })

  console.log("-----------------------------");

  if (allPassed)
    console.log("🎉 SUCCESS: All tests PASSED.");
  else
    console.log(`⚠️ WARNING: ${failCount}/${testData.length} tests FAILED.`);
}

runTests(testData);