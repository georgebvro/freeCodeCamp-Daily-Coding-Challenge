function jbelmu(text) {
  let textArray = text.split(" ");
  
  textArray = textArray.map(word => {
    const wordArray = 
      word.split("")
      .slice(1, word.length - 1)
      .sort();

    wordArray.unshift(word[0]);
    if (word.length > 1)
      wordArray.push(word[word.length - 1]);

    return wordArray.join("");
  })

  return textArray.join(" ");
}

console.log(jbelmu("hello world"));
console.log(jbelmu("i love jumbled text"));
console.log(jbelmu("freecodecamp is my favorite place to learn to code"));
console.log(jbelmu("the quick brown fox jumps over the lazy dog"));

// --- TEST SUITE ---

const testsText = `
1. jbelmu("hello world") should return "hello wlord".
2. jbelmu("i love jumbled text") should return "i love jbelmud text".
3. jbelmu("freecodecamp is my favorite place to learn to code") should return "faccdeeemorp is my faiortve pacle to laern to cdoe".
4. jbelmu("the quick brown fox jumps over the lazy dog") should return "the qciuk borwn fox jmpus oevr the lazy dog".
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