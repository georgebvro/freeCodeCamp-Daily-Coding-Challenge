function navigate(commands) {
  let history = ["Home"];
  let cursor = 0;

  commands.forEach(command => {
    const { action, page } = /(?<action>Visit|Back|Forward) ?(?<page>.*)/.exec(command).groups;
    
    switch(action) {
      case "Visit": 
        history = history.slice(0, cursor + 1);
        history.push(page);
        cursor ++;
        break;

      case "Back":
        if (cursor > 0)
          cursor --;
        break;

      case "Forward":
        if (cursor < history.length - 1)
          cursor ++;
    }
  });

  return history[cursor];
}

console.log(navigate(["Visit About Us", "Back", "Forward"]));
console.log(navigate(["Forward"]));
console.log(navigate(["Back"]));
console.log(navigate(["Visit About Us", "Visit Gallery"]));
console.log(navigate(["Visit About Us", "Visit Gallery", "Back", "Back"]));
console.log(navigate(["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"]));
console.log(navigate(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"]));

// --- TEST SUITE ---

const testsText = `
1. navigate(["Visit About Us", "Back", "Forward"]) should return "About Us".
2. navigate(["Forward"]) should return "Home".
3. navigate(["Back"]) should return "Home".
4. navigate(["Visit About Us", "Visit Gallery"]) should return "Gallery".
5. navigate(["Visit About Us", "Visit Gallery", "Back", "Back"]) should return "Home".
6. navigate(["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"]) should return "Contact".
7. navigate(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"]) should return "Visit Us".
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