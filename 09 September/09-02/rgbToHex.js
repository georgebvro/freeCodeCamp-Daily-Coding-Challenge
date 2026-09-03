function rgbToHex(rgb) {
  const regex = /rgb\( *(?<red>\d{1,3}) *, *(?<green>\d{1,3}) *, *(?<blue>\d{1,3}) *\)/g

  const regexResult = regex.exec(rgb);

  return "#" + 
    parseInt(regexResult.groups.red).toString(16).padStart(2, "0") + 
    parseInt(regexResult.groups.green).toString(16).padStart(2, "0") +
    parseInt(regexResult.groups.blue).toString(16).padStart(2, "0");
}

console.log(rgbToHex("rgb(255, 255, 255)"));
console.log(rgbToHex("rgb(1, 11, 111)"));
console.log(rgbToHex("rgb(173, 216, 230)"));
console.log(rgbToHex("rgb(79, 123, 201)"));
console.log(rgbToHex("rgb(1,1,1)"));
console.log(rgbToHex("rgb(22 ,2 ,222)"));
console.log(rgbToHex("rgb( 123 , 234 , 013 )"));

// --- TEST SUITE ---

const testsText = `
1. rgbToHex("rgb(255, 255, 255)") should return "#ffffff".
2. rgbToHex("rgb(1, 11, 111)") should return "#010b6f".
3. rgbToHex("rgb(173, 216, 230)") should return "#add8e6".
4. rgbToHex("rgb(79, 123, 201)") should return "#4f7bc9".
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