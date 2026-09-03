function capitalize(paragraph) {
  paragraph = paragraph[0].toUpperCase() + paragraph.substring(1);

  for (let i = 1; i < paragraph.length; i ++) {
    if (/[.?!]/.test(paragraph[i])) {
      for (let j = i + 1; j < paragraph.length; j ++) {
        if (/[a-zA-Z]/.test(paragraph[j])) {
          paragraph = paragraph.substring(0, j) + paragraph[j].toUpperCase() + paragraph.substring(j + 1);
          break;
        }
      }
    }
  }

  return paragraph;
}

console.log(capitalize("this is a simple sentence."));
console.log(capitalize("hello world. how are you?"));
console.log(capitalize("i did today's coding challenge... it was fun!!"));
console.log(capitalize("crazy!!!strange???unconventional...sentences."));
console.log(capitalize("there's a space before this period . why is there a space before that period ?"));

console.log(capitalize("a."));
console.log(capitalize("b"));

// --- TEST SUITE ---

const testsText = `
1. capitalize("this is a simple sentence.") should return "This is a simple sentence.".
2. capitalize("hello world. how are you?") should return "Hello world. How are you?".
3. capitalize("i did today's coding challenge... it was fun!!") should return "I did today's coding challenge... It was fun!!".
4. capitalize("crazy!!!strange???unconventional...sentences.") should return "Crazy!!!Strange???Unconventional...Sentences.".
5. capitalize("there's a space before this period . why is there a space before that period ?") should return "There's a space before this period . Why is there a space before that period ?".
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