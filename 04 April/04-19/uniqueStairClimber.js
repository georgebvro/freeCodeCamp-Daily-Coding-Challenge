function getUniqueClimbs(steps) {

/* Backtracking solution that works for small number of steps (e.g. 4, 5, 10, 18) but takes long and fills the stack for larger numbers
  let count = 0;

  const backtrack = stepNumber => {
    if (stepNumber >= steps) {
      if (stepNumber === steps) {
        ++count;
      }
      
      return;
    }

    for (const stepsAtATimeChoice of [1, 2]) {
      stepNumber += stepsAtATimeChoice;
      backtrack(stepNumber);
      stepNumber -= stepsAtATimeChoice;
    }
  }

  backtrack(0);

  return count;
*/

// Solution that keeps a running tally using only the last two steps counts
  if (steps <= 2) {
    return steps;
  }

  let waysToClimbUpToTwoStepsBefore = 1;
  let waysToClimbUpToOneStepBefore = 2;
  let currentCount = 0;

  for (let i = 3; i <= steps; ++i) {
    currentCount = waysToClimbUpToTwoStepsBefore + waysToClimbUpToOneStepBefore;

    waysToClimbUpToTwoStepsBefore = waysToClimbUpToOneStepBefore;
    waysToClimbUpToOneStepBefore = currentCount;
  }

  return currentCount;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. getUniqueClimbs(4) should return 5.
2. getUniqueClimbs(5) should return 8.
3. getUniqueClimbs(10) should return 89.
4. getUniqueClimbs(18) should return 4181.
5. getUniqueClimbs(29) should return 832040.
6. getUniqueClimbs(50) should return 20365011074.
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