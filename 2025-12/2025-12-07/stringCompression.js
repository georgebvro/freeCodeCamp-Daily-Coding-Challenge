function compressString(sentence) {
  const words = sentence.split(" ");
  const compressed = [];
  let counter = 0;
  let i = 0;

  while (i < words.length) {
    let j = i;
	
    while (words[i] === words[j]) {
      ++counter;
      ++j;
    }
	
    compressed.push(counter > 1 ? `${words[i]}(${counter})` : words[i]);
    counter = 0;
    i = j;
  }

  return compressed.join(" ");
}

console.log(compressString("yes yes yes please"));
console.log(compressString("I have have have apples"));
console.log(compressString("one one three and to the the the the"));
console.log(compressString("route route route route route route tee tee tee tee tee tee"));

// --- TEST SUITE ---

const testsText = `
1. compressString("yes yes yes please") should return "yes(3) please".
2. compressString("I have have have apples") should return "I have(3) apples".
3. compressString("one one three and to the the the the") should return "one(2) three and to the(4)".
4. compressString("route route route route route route tee tee tee tee tee tee") should return "route(6) tee(6)".
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