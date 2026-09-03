function classification(temp) {
  let stellar_classification = "";
  
  if (temp >= 30000)
    stellar_classification = "O";
  
  else if (temp >= 10000)
    stellar_classification = "B";
  
  else if (temp >= 7500)
    stellar_classification = "A";
  
  else if (temp >= 6000)
    stellar_classification = "F";
  
  else if (temp >= 5200)
    stellar_classification = "G";
  
  else if (temp >= 3700)
    stellar_classification = "K";
  
  else if (temp >= 0)
    stellar_classification = "M";
  
  return stellar_classification;
}

console.log(classification(5778));
console.log(classification(2400));
console.log(classification(9999));
console.log(classification(3700));
console.log(classification(3699));
console.log(classification(210000));
console.log(classification(6000));
console.log(classification(11432));

// --- TEST SUITE ---

const testsText = `
1. classification(5778) should return "G".
2. classification(2400) should return "M".
3. classification(9999) should return "A".
4. classification(3700) should return "K".
5. classification(3699) should return "M".
6. classification(210000) should return "O".
7. classification(6000) should return "F".
8. classification(11432) should return "B".
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