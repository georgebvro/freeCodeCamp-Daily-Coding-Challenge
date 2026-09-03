function generateSignature(name, title, company) {
  let prefix;

  if (/^[A-I]/i.exec(name))
    prefix = ">>";
  
  else if (/^[J-R]/i.exec(name))
    prefix = "--";

  else if (/^[S-Z]/i.exec(name))
    prefix = "::";

  return `${prefix}${name}, ${title} at ${company}`;
}

console.log(generateSignature("Quinn Waverly", "Founder and CEO", "TechCo"));
console.log(generateSignature("Alice Reed", "Engineer", "TechCo"));
console.log(generateSignature("Tina Vaughn", "Developer", "example.com"));
console.log(generateSignature("B. B.", "Product Tester", "AcmeCorp"));
console.log(generateSignature("windstorm", "Cloud Architect", "Atmospheronics"));

// --- TEST SUITE ---

const testsText = `
1. generateSignature("Quinn Waverly", "Founder and CEO", "TechCo") should return "--Quinn Waverly, Founder and CEO at TechCo".
2. generateSignature("Alice Reed", "Engineer", "TechCo") should return ">>Alice Reed, Engineer at TechCo".
3. generateSignature("Tina Vaughn", "Developer", "example.com") should return "::Tina Vaughn, Developer at example.com".
4. generateSignature("B. B.", "Product Tester", "AcmeCorp") should return ">>B. B., Product Tester at AcmeCorp".
5. generateSignature("windstorm", "Cloud Architect", "Atmospheronics") should return "::windstorm, Cloud Architect at Atmospheronics".
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