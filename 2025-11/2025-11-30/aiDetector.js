function detectAI(text) {
  if ((text.match(/-/g) || []).length >= 2
    || (text.match(/\(.*?\)/g) || []).length >= 2
    || text.replace(/[^a-zA-Z ]/g, "").split(" ").filter(word => word.length >= 7).length >= 3
  )
    return "AI";

  return "Human";
}

// --- TEST SUITE ---

const testsText = `
1. detectAI("The quick brown fox jumped over the lazy dog.") should return "Human".
2. detectAI("The hypersonic brown fox - jumped (over) the lazy dog.") should return "Human".
3. detectAI("Yes - you're right! I made a mistake there - let me try again.") should return "AI".
4. detectAI("The extraordinary students were studying vivaciously.") should return "AI".
5. detectAI("The (excited) student was (coding) in the library.") should return "AI".
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