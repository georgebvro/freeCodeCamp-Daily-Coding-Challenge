function decode(s) {
  const re = /\([^\(\)]*\)/g;

  while(re.test(s)) {
    s = s.replace(re, replacer);
  }

  return s;
}

function replacer(match) {
  return match.slice(1, match.length - 1).split('').reverse().join('');
}

console.log(decode("(f(b(dc)e)a)"));
console.log(decode("((is?)(a(t d)h)e(n y( uo)r)aC)"));
console.log(decode("f(Ce(re))o((e(aC)m)d)p"));
console.log(decode("a()b"));

// --- TEST SUITE ---

const testsText = `
1. decode("(f(b(dc)e)a)") should return "abcdef".
2. decode("((is?)(a(t d)h)e(n y( uo)r)aC)") should return "Can you read this?".
3. decode("f(Ce(re))o((e(aC)m)d)p") should return "freeCodeCamp".
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