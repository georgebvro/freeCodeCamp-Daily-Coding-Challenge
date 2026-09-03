function wiseSpeak(sentence) {
  const { goesToEnd, goesToFront, punctuation } = 
    /(?<goesToEnd>.*?(have|must|are|will|can)) (?<goesToFront>.*)(?<punctuation>.)/
    .exec(sentence)
    .groups;
  
  return `${goesToFront[0].toUpperCase()}${goesToFront.slice(1)}, ${goesToEnd.toLowerCase()}${punctuation}`;
}

console.log(wiseSpeak("You must speak wisely."));
console.log(wiseSpeak("You can do it!"));
console.log(wiseSpeak("Do you think you will complete this?"));
console.log(wiseSpeak("All your base are belong to us."));
console.log(wiseSpeak("You have much to learn."));

// --- TEST SUITE ---

const testsText = `
1. wiseSpeak("You must speak wisely.") should return "Speak wisely, you must."
2. wiseSpeak("You can do it!") should return "Do it, you can!"
3. wiseSpeak("Do you think you will complete this?") should return "Complete this, do you think you will?"
4. wiseSpeak("All your base are belong to us.") should return "Belong to us, all your base are."
5. wiseSpeak("You have much to learn.") should return "Much to learn, you have."
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