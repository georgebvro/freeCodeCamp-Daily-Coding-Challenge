function dive(map, coordinates) {
  if (map[coordinates[0]][coordinates[1]] === "-")
    return "Empty";

  const updatedMap = [...map];
  updatedMap[coordinates[0]][coordinates[1]] = "X";

  for (const row of updatedMap) 
    for (const location of row) 
      if (location === "O")
        return "Found";
        
  return "Recovered";
}

console.log(dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 1]));
console.log(dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 0]));
console.log(dive([[ "-", "X"], [ "-", "O"], [ "-", "O"]], [1, 1]));
console.log(dive([[ "-", "-", "-"], [ "X", "O", "X"], [ "-", "-", "-"]], [1, 2]));
console.log(dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [2, 0]));
console.log(dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [1, 2]));

// --- TEST SUITE ---

const testsText = `
1. dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 1]) should return "Recovered".
2. dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 0]) should return "Empty".
3. dive([[ "-", "X"], [ "-", "O"], [ "-", "O"]], [1, 1]) should return "Found".
4. dive([[ "-", "-", "-"], [ "X", "O", "X"], [ "-", "-", "-"]], [1, 2]) should return "Found".
5. dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [2, 0]) should return "Recovered".
6. dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [1, 2]) should return "Empty".
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