function doMath(str) {
  const array = [...str.matchAll(/\d+|[^\d]+/g)]
    .map(match => isInteger(match[0]) ? parseInt(match[0]) : match[0]);
  let result = isInteger(array[0]) ? array[0] : array[1];

  array.forEach((match, index, source) => {
    if (!isInteger(match)) {
      if (index !== 0 && index !== source.length - 1) {
        result += (match.length % 2 ? -1 : 1) * source[index + 1];
      }
    }
  })

  return result;
}

const isInteger = element => !Number.isNaN(parseInt(element));

// --- TEST SUITE ---

const testsText = String.raw`
1. doMath("3ab10c8") should return 5.
2. doMath("6MINUS4") should return 2.
3. doMath("9plus3") should return 12.
4. doMath("5fkwo#10i#%.<>15P=@20!#B/25") should return 15.
5. doMath("a.67,1$lk6ldf34@#LD@]2d32d2'2l3,@l3L#@2gh35s09if=df#$t9sm49t0df3$^%[vc;:0:4mt") should return 67.
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("——————————————————————————",
            "\n🧪Starting Verification...",
            "\n——————————————————————————");

  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(test.output);

    const comparison = Array.isArray(testOutput)
      ? arraysEqual(functionCallOutput, testOutput)
      : functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    } else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      ++failCount;
    }
    console.log("————————————————————————————");
  })

  console.log(failCount
    ? `⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`
    : "🎉SUCCESS: All tests PASSED."
  );
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (Array.isArray(a[i])) {
      if (Array.isArray(b[i])) {
        if (!arraysEqual(a[i], b[i])) {
          return false;
        }
      } else {
        return false;
      }
    } else if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

runTests(testData);