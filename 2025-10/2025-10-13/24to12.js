function to12(time) {
  let hour = parseInt(time.slice(0, 2));
  let minute = time.slice(2);
  const meridiem = hour < 12 ? "AM" : "PM";

  hour = hour === 0 ? 12 : hour % 12;

  return `${hour}:${minute} ${meridiem}`;
}

console.log(to12("1124"));
console.log(to12("0900"));
console.log(to12("1455"));
console.log(to12("2346"));
console.log(to12("0030"));

// --- TEST SUITE ---

const testsText = `
1. to12("1124") should return "11:24 AM".
2. to12("0900") should return "9:00 AM".
3. to12("1455") should return "2:55 PM".
4. to12("2346") should return "11:46 PM".
5. to12("0030") should return "12:30 AM".
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