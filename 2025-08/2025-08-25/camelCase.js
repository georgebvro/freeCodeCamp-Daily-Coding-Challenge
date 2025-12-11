function toCamelCase(s) {
  const words = s.split(/[ _-]+/);
  
  for (let i = 0; i < words.length; i ++) {
    words[i] = words[i].toLowerCase();
    
    if (i > 0) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
  }
  
  return words.join('');
}

console.log(toCamelCase("hello world"));
console.log(toCamelCase("HELLO WORLD"));
console.log(toCamelCase("secret agent-X"));
console.log(toCamelCase("FREE cODE cAMP"));
console.log(toCamelCase("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk"));

// --- TEST SUITE ---

const testsText = `
1. toCamelCase("hello world") should return "helloWorld".
2. toCamelCase("HELLO WORLD") should return "helloWorld".
3. toCamelCase("secret agent-X") should return "secretAgentX".
4. toCamelCase("FREE cODE cAMP") should return "freeCodeCamp".
5. toCamelCase("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk") should return "yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk".
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