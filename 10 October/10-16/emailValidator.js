function validate(email) {
  /* Step-by-step approach
  if ([...email.matchAll(/@/g)].length !== 1)
    return false;

  const { local, domain } = /(?<local>.+)@(?<domain>.+)/.exec(email).groups;

  if (/[^\w.-]/g.exec(local)
    || /^\.|\.$/g.exec(local)
    || !/\./g.exec(domain)
    || !/\.[a-zA-Z]{2,}$/g.exec(domain)
    || /\.\./g.exec(local) 
    || /\.\./g.exec(domain))
    return false;

  else
    return true;
  */

  // Solution using only one regular expression
  return Boolean(/^(?!.*@.*@)(?!\.)(?![\w-]*\.\.)[\w.-]+(?<!\.)@(?!.*\.\.).*\.[a-zA-Z]{2,}$/.exec(email));
}

console.log(validate("a@b.cd"));
console.log(validate("hell.-w.rld@example.com"));
console.log(validate(".b@sh.rc"));
console.log(validate("example@test.c0"));
console.log(validate("freecodecamp.org"));
console.log(validate("develop.ment_user@c0D!NG.R.CKS"));
console.log(validate("hello.@wo.rld"));
console.log(validate("hello@world..com"));
console.log(validate("git@commit@push.io"));

console.log(validate("a,b@domain.com"));
console.log(validate("a@domain"));
console.log(validate("a@domain.c"));
console.log(validate("a@.domain.com"));
console.log(validate("a@..domain.com"));
console.log(validate("..a@domain.com"));
console.log(validate("...a@domain.com"));
console.log(validate("abc..def@domain.com"));
console.log(validate("abc@sub.domain.com"));
console.log(validate("@domain.com"));
console.log(validate("abc@sub.domain.com."));

// --- TEST SUITE ---

const testsText = `
1. validate("a@b.cd") should return true.
2. validate("hell.-w.rld@example.com") should return true.
3. validate(".b@sh.rc") should return false.
4. validate("example@test.c0") should return false.
5. validate("freecodecamp.org") should return false.
6. validate("develop.ment_user@c0D!NG.R.CKS") should return true.
7. validate("hello.@wo.rld") should return false.
8. validate("hello@world..com") should return false.
9. validate("develop..ment_user@c0D!NG.R.CKS") should return false.
10. validate("git@commit@push.io") should return false.
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