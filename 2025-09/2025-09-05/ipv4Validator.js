function isValidIPv4(ipv4) {
  const regex = /\D|^$|0\d/;
  let isValid = true;
  const octets = ipv4.split(".");

  if (octets.length !== 4) 
    isValid = false;
  
  else
    octets.forEach(octet => {
      if (regex.test(octet) || octet < 0 || octet > 255)
        isValid = false;
    })
	
  return isValid;
}

console.log(isValidIPv4("192.168.1.1"));
console.log(isValidIPv4("0.0.0.0"));
console.log(isValidIPv4("255.01.50.111"));
console.log(isValidIPv4("255.00.50.111"));
console.log(isValidIPv4("256.101.50.115"));
console.log(isValidIPv4("192.168.101."));
console.log(isValidIPv4("192168145213"));

console.log(isValidIPv4("192.168.a.1"));
console.log(isValidIPv4("192.50b.0.1"));

// --- TEST SUITE ---

const testsText = `
1. isValidIPv4("192.168.1.1") should return true.
2. isValidIPv4("0.0.0.0") should return true.
3. isValidIPv4("255.01.50.111") should return false.
4. isValidIPv4("255.00.50.111") should return false.
5. isValidIPv4("256.101.50.115") should return false.
6. isValidIPv4("192.168.101.") should return false.
7. isValidIPv4("192168145213") should return false.
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