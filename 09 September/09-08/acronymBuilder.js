function buildAcronym(str) {
  const specialWords = ["a", "for", "an", "and", "by", "of"];
  
  return str
    .split(" ")
    .map((word, index) => 
      !specialWords.includes(word.toLowerCase()) || (specialWords.includes(word.toLowerCase()) && index === 0)
        ? word[0].toUpperCase() 
        : undefined)
    .join("");
}

console.log(buildAcronym("Search Engine Optimization"));
console.log(buildAcronym("Frequently Asked Questions"));
console.log(buildAcronym("National Aeronautics and Space Administration"));
console.log(buildAcronym("Federal Bureau of Investigation"));
console.log(buildAcronym("For your information"));
console.log(buildAcronym("By the way"));
console.log(buildAcronym("An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily"));

console.log(buildAcronym("For An Open Door"));
console.log(buildAcronym("for An Open Door"));

// --- TEST SUITE ---

const testsText = `
1. buildAcronym("Search Engine Optimization") should return "SEO".
2. buildAcronym("Frequently Asked Questions") should return "FAQ".
3. buildAcronym("National Aeronautics and Space Administration") should return "NASA".
4. buildAcronym("Federal Bureau of Investigation") should return "FBI".
5. buildAcronym("For your information") should return "FYI".
6. buildAcronym("By the way") should return "BTW".
7. buildAcronym("An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily") should return "AUHWPOTIMSH".
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