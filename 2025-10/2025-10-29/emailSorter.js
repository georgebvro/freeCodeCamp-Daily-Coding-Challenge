function sort(emails) {
  const regex = /(.+)@(.+)/;

  return emails.sort((a, b) => {
    const aUsername = regex.exec(a)[1],
      aDomain = regex.exec(a)[2],
      bUsername = regex.exec(b)[1],
      bDomain = regex.exec(b)[2];

    return aDomain.localeCompare(bDomain, undefined, { sensitivity: 'base' }) 
      || aUsername.localeCompare(bUsername, undefined, { sensitivity: 'base' });
  });
}

console.log(sort(["jill@mail.com", "john@example.com", "jane@example.com"]));
console.log(sort(["bob@mail.com", "alice@zoo.com", "carol@mail.com"]));
console.log(sort(["user@z.com", "user@y.com", "user@x.com"]));
console.log(sort(["sam@MAIL.com", "amy@mail.COM", "bob@Mail.com"]));
console.log(sort(["simon@beta.com", "sammy@alpha.com", "Sarah@Alpha.com", "SAM@ALPHA.com", "Simone@Beta.com", "sara@alpha.com"]));

// --- TEST SUITE ---

const testsText = `
1. sort(["jill@mail.com", "john@example.com", "jane@example.com"]) should return ["jane@example.com", "john@example.com", "jill@mail.com"].
2. sort(["bob@mail.com", "alice@zoo.com", "carol@mail.com"]) should return ["bob@mail.com", "carol@mail.com", "alice@zoo.com"].
3. sort(["user@z.com", "user@y.com", "user@x.com"]) should return ["user@x.com", "user@y.com", "user@z.com"].
4. sort(["sam@MAIL.com", "amy@mail.COM", "bob@Mail.com"]) should return ["amy@mail.COM", "bob@Mail.com", "sam@MAIL.com"].
5. sort(["simon@beta.com", "sammy@alpha.com", "Sarah@Alpha.com", "SAM@ALPHA.com", "Simone@Beta.com", "sara@alpha.com"]) should return ["SAM@ALPHA.com", "sammy@alpha.com", "sara@alpha.com", "Sarah@Alpha.com", "simon@beta.com", "Simone@Beta.com"].
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