function isValidEquation(equation) {
  /* Solution using eval()
  const { left, right } = /(?<left>.+)=(?<right>.+)/.exec(equation).groups;

  return eval(left) === eval(right);
  */

  // Solution performing manual evaluation
  const regex = /\d+|[-/+*=]/g;
  const equationArray = [...equation.matchAll(regex).map(match => {
    const op = Number(match[0]);
    return Number.isNaN(op) ? match[0] : op;
  })];
  
  while (["*", "/"].some(operator => equationArray.includes(operator))) {
    for (let index in equationArray) {
      index = Number(index);
      let newValue;
      
      if (equationArray[index] === "*")
        newValue = equationArray[index - 1] * equationArray[index + 1];

      if (equationArray[index] === "/")
        newValue = equationArray[index - 1] / equationArray[index + 1];
      
      if (newValue !== undefined) {
        equationArray.splice(index - 1, 3, newValue);
        break;
      }
    }
  }

  while (["+", "-"].some(operator => equationArray.includes(operator))) {
    for (let index in equationArray) {
      index = Number(index);
      let newValue;
      
      if (equationArray[index] === "+")
        newValue = equationArray[index - 1] + equationArray[index + 1];

      if (equationArray[index] === "-")
        newValue = equationArray[index - 1] - equationArray[index + 1];
      
      if (newValue !== undefined) {
        equationArray.splice(index - 1, 3, newValue);
        break;
      }
    }
  }

  return equationArray[0] === equationArray.at(-1);
}

// --- TEST SUITE ---

const testsText = String.raw`
1. isValidEquation("2 + 2 = 4") should return true.
2. isValidEquation("2 + 3 - 1 = 4") should return true.
3. isValidEquation("8 / 2 = 4") should return true.
4. isValidEquation("10 * 5 = 50") should return true.
5. isValidEquation("2 - 2 = 0") should return true.
6. isValidEquation("2 + 9 / 3 = 5") should return true.
7. isValidEquation("20 - 2 * 3 = 14") should return true.
8. isValidEquation("2 + 5 = 6") should return false.
9. isValidEquation("10 - 2 * 3 = 24") should return false.
10. isValidEquation("3 + 9 / 3 = 4") should return false.
`;

const testsRegex = /(?<number>\d+)\.\s(?<functionCall>.+) should return (?<output>.+?)\.?$/gm;
const testData = [...testsText.matchAll(testsRegex).map(match => match.groups)];

function runTests(testData) {
  console.log("--------------------------");
  console.log("🧪Starting Verification...");
  console.log("--------------------------");

  let failCount = 0;
  
  testData.forEach(test => {
    const functionCallOutput = eval(test.functionCall);
    const testOutput = eval(test.output);

    const comparison = Array.isArray(testOutput)
      ? arraysEqual(functionCallOutput, testOutput)
      : functionCallOutput === testOutput;

    if (comparison) {
      console.log(`${test.number}.✅PASS - Function Call: ${test.functionCall}`);
    }
    else {
      console.log(`${test.number}.❌FAIL - Function Call: ${test.functionCall}\nExpected: ${testOutput}\nGot: ${functionCallOutput}`);
      ++failCount;
    }
  })

  console.log("----------------------------",
    failCount
    ? `\n⚠️WARNING: ${failCount}/${testData.length} tests FAILED.`
    : "\n🎉SUCCESS: All tests PASSED."
  );
}

function arraysEqual(a, b) {
  if (a.length !== b.length)
    return false;

  for (let i = 0; i < a.length; ++i) {
    if (Array.isArray(a[i])) {
      if (Array.isArray(b[i])) {
        if (!arraysEqual(a[i], b[i]))
          return false;
      }
      else 
        return false;
    }

    else if (a[i] !== b[i])
      return false;
  }

  return true;
}

runTests(testData);