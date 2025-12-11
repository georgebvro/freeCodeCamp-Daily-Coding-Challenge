function spookify(boo) {
  const spooky = boo.replace(/[_-]/g, "~").split("");
  let everyOtherLetter = true;

  for (const index in spooky) {
    if (/[a-zA-Z]/.exec(spooky[index])) {

      spooky[index] = everyOtherLetter ? spooky[index].toUpperCase() : spooky[index].toLowerCase();
      everyOtherLetter = !everyOtherLetter;
    }
  }

  return spooky.join("");
}

console.log(spookify("hello_world"));
console.log(spookify("Spooky_Case"));
console.log(spookify("TRICK-or-TREAT"));
console.log(spookify("c_a-n_d-y_-b-o_w_l"));
console.log(spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts"));

// --- TEST SUITE ---

const testsText = `
1. spookify("hello_world") should return "HeLlO~wOrLd".
2. spookify("Spooky_Case") should return "SpOoKy~CaSe".
3. spookify("TRICK-or-TREAT") should return "TrIcK~oR~tReAt".
4. spookify("c_a-n_d-y_-b-o_w_l") should return "C~a~N~d~Y~~b~O~w~L".
5. spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts") should return "ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS".
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