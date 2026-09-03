function decode(message, shift) {
  
  const codeOfUppercaseA = 'A'.charCodeAt(0);
  const codeOfUppercaseZ = 'Z'.charCodeAt(0);
  const codeOfLowercaseA = 'a'.charCodeAt(0);
  const codeOfLowercaseZ = 'z'.charCodeAt(0);
  const alphabetLength = codeOfUppercaseZ - codeOfUppercaseA + 1;
  let decodedMessage = '';

  for (let i = 0; i < message.length; i ++) {
    const currentCharCode = message.charCodeAt(i);
    let newCharCode = currentCharCode;

    if (codeOfUppercaseA <= currentCharCode && currentCharCode <= codeOfUppercaseZ) {
      const alphabetIndex = currentCharCode - codeOfUppercaseA;
      const newAlphabetIndex = (alphabetIndex - shift + alphabetLength) % alphabetLength;
      newCharCode = codeOfUppercaseA + newAlphabetIndex;
    }
    else if (codeOfLowercaseA <= currentCharCode && currentCharCode <= codeOfLowercaseZ) {
      const alphabetIndex = currentCharCode - codeOfLowercaseA;
      const newAlphabetIndex = (alphabetIndex - shift + alphabetLength) % alphabetLength;
      newCharCode = codeOfLowercaseA + newAlphabetIndex;
    }

    decodedMessage += String.fromCharCode(newCharCode);
  }

  return decodedMessage;
}

console.log(decode("Xlmw mw e wigvix qiwweki.", 4));
console.log(decode("Byffi Qilfx!", 20));
console.log(decode("Zqd xnt njzx?", -1));
console.log(decode("oannLxmnLjvy", 9));
//console.log(decode("A", 1));
//console.log(decode("Y", -1));
//console.log(decode("C", 3));
//console.log(decode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", -1));
//console.log(decode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", -2));
//console.log(decode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", -3));
//console.log(decode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 1));
//console.log(decode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 2));
//console.log(decode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 25));

// --- TEST SUITE ---

const testsText = `
1. decode("Xlmw mw e wigvix qiwweki.", 4) should return "This is a secret message."
2. decode("Byffi Qilfx!", 20) should return "Hello World!"
3. decode("Zqd xnt njzx?", -1) should return "Are you okay?"
4. decode("oannLxmnLjvy", 9) should return "freeCodeCamp"
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