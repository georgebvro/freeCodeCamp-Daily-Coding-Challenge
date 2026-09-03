function fixPrankNumber(arr) {
  const differences = arr.map((number, index, source) => index === 0 ? undefined : number - source[index - 1]);
  const counts = {};
  let maxCount = 0;
  let pattern;

  differences.forEach(difference => counts[difference] = (counts[difference] || 0) + 1);

  for (const [difference, count] of Object.entries(counts))
    if (count > maxCount) {
      pattern = Number(difference);
      maxCount = count;
    }

  const fixedArr = [...arr];

  for (let index in differences) {
    index = Number(index);
    
    if (differences[index] === pattern)
      continue;
    
    if (index === 0 && differences[1] !== pattern && differences[2] === pattern) {
      fixedArr[0] = arr[1] - pattern;
      break;
    }

    if (
      0 < index && index < differences.length - 1 && differences[index + 1] !== pattern 
      || 
      index === differences.length - 1
    ) {
      fixedArr[index] = arr[index - 1] + pattern;
      break;
    }
  }

  return fixedArr;
}

// --- TEST SUITE ---

const testsText = String.raw`
1. fixPrankNumber([2, 4, 7, 8, 10]) should return [2, 4, 6, 8, 10].
2. fixPrankNumber([10, 10, 8, 7, 6]) should return [10, 9, 8, 7, 6].
3. fixPrankNumber([12, 24, 36, 48, 61, 72, 84, 96]) should return [12, 24, 36, 48, 60, 72, 84, 96].
4. fixPrankNumber([4, 1, -2, -5, -8, -5]) should return [4, 1, -2, -5, -8, -11].
5. fixPrankNumber([0, 100, 200, 300, 150, 500]) should return [0, 100, 200, 300, 400, 500].
6. fixPrankNumber([400, 425, 400, 375, 350, 325, 300]) should return [450, 425, 400, 375, 350, 325, 300].
7. fixPrankNumber([-5, 5, 10, 15, 20]) should return [0, 5, 10, 15, 20].
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