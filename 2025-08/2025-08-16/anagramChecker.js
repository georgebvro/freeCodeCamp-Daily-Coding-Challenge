function areAnagrams(str1, str2) {
  const regex1 = "[^" + [...new Set(str1.toLowerCase().match(/[^\s]/g))].join("") + "]";
  const regex2 = "[^" + [...new Set(str2.toLowerCase().match(/[^\s]/g))].join("") + "]";
  
  return str1.length === str2.length
    && !new RegExp(regex1, "i").exec(str2.replace(" ", ""))
    && !new RegExp(regex2, "i").exec(str1.replace(" ", ""));
}

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("School master", "The classroom"));
console.log(areAnagrams("A gentleman", "Elegant man"));
console.log(areAnagrams("Hello", "World"));
console.log(areAnagrams("apple", "banana"));
console.log(areAnagrams("cat", "dog"));

console.log(areAnagrams("abc", "abb"));
console.log(areAnagrams("abc", "abbc"));

// --- TEST SUITE ---

const testsText = `
1. areAnagrams("listen", "silent") should return true.
2. areAnagrams("School master", "The classroom") should return true.
3. areAnagrams("A gentleman", "Elegant man") should return true.
4. areAnagrams("Hello", "World") should return false.
5. areAnagrams("apple", "banana") should return false.
6. areAnagrams("cat", "dog") should return false.
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